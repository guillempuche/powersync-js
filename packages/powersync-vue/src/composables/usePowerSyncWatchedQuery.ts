import { QueryResult, SQLWatchOptions } from '@journeyapps/powersync-sdk-common';
import { MaybeRef, Ref, ref, toValue, watchEffect } from 'vue';
import { usePowerSync } from './powerSync';

export type WatchedQueryResult<T> = { data: Ref<T[]>, error: Ref<Error> };

/**
 * A composable to access the results of a watched query.
 */
export const usePowerSyncWatchedQuery = <T = any>(
  sqlStatement: MaybeRef<string>,
  parameters: MaybeRef<any[]> = [],
  options: Omit<SQLWatchOptions, 'signal'> = {},
): WatchedQueryResult<T> => {

  const data = ref([]);
  const error = ref<Error>(undefined);

  const powerSync = usePowerSync();

  let abortController = new AbortController();
  watchEffect((onCleanup) => {
    // Abort any previous watches when the effect triggers again, or when the component is unmounted
    onCleanup(() => abortController.abort())
    abortController = new AbortController();
    if (!powerSync) {
      error.value = new Error('PowerSync not configured.')
      return;
    }

    const onResult = (result) => {
      data.value = result.rows?._array ?? [];
      error.value = undefined;
    };
    const onError = (e: Error) => {
      data.value = [];

      const wrappedError = new Error('PowerSync failed to fetch data: ' + e.message);
      wrappedError.cause = e; // Include the original error as the cause
      error.value = wrappedError;
    };
    const watchOptions = {
      ...options,
      signal: abortController.signal
    };


    powerSync.value.query(toValue(sqlStatement), toValue(parameters)).watch(onResult, onError, watchOptions);
  });

  return { data, error };
};
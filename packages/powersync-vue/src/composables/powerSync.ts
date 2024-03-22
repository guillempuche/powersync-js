import { AbstractPowerSyncDatabase } from '@journeyapps/powersync-sdk-common';
import { App, MaybeRef, Ref, inject, provide, ref } from 'vue';

// Create a unique symbol for the PowerSync context
const PowerSyncKey = Symbol();

/**
 * Create a Vue plugin to define the PowerSync configuration.
 * Configuration will be provided app-wide (highest position in component hierarchy).
 * 
 * Needs to be installed on a Vue instance using `app.use()`.
 */
export function createPowerSync(powerSyncOptions: {
  database: MaybeRef<AbstractPowerSyncDatabase>;
}) {
  const install = (app: App) => {
    app.provide(PowerSyncKey, ref(powerSyncOptions.database));
  };
  return { install }
}

/**
 * Provide the PowerSync configuration for all the caller component's descendants.
 * This function works on a hierarchical basis, meaning that the configuration provided by `providePowerSync` in a child component will override the configuration provided by `createPowerSync` in a parent component.
 * If `createPowerSync` was used to provide an app-wide configuration, all `providePowerSync` invocations are below it in the hierarchy.
 */
export function providePowerSync(database: MaybeRef<AbstractPowerSyncDatabase>) {
  provide(PowerSyncKey, ref(database));
}

/**
 * Retrieve the nearest PowerSync configuration from the component hierarchy.
 * The configuration can be provided by using the `createPowerSync` function to provide an app-wide configuration or by using the `providePowerSync` function in an ancestor component.
 * If multiple configurations are found in the hierarchy, the closest configuration to the current component will be used.
 * 
 * @returns The PowerSync configuration if found, otherwise undefined.
 */
export const usePowerSync = () => inject<Ref<AbstractPowerSyncDatabase> | undefined>(PowerSyncKey);
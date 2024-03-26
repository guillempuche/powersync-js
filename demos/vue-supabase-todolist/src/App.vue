<script setup lang="ts">
import { usePowerSync, usePowerSyncQuery, usePowerSyncWatchedQuery } from '@journeyapps/powersync-vue';
import { v4 as uuid } from 'uuid';
import { computed, ref } from 'vue';
import { generateRandomFirstName } from './utils/random';

const ps = usePowerSync();
const addDummy = async () => {
  const newName = generateRandomFirstName();
  await ps.value.execute('INSERT INTO list (id, name) VALUES (?, ?)', [uuid(), newName]);
  console.log('Created ', newName)
}
const query = ref("SELECT * from list");
const queryParams = ref('Steven');
const splitParams = computed(() => queryParams.value.split(','));

const { data, error, loading, refresh } = usePowerSyncQuery(query, splitParams);
const { data: watchedData, error: watchedError } = usePowerSyncWatchedQuery(query, splitParams,);

</script>

<template>
  <div>
    <input v-model="query" style="width: 500px" />

    <input v-model="queryParams" style="width: 500px; margin-left: 20px;" />
    <div>
      <button @click="addDummy">Add Dummy</button>
      <button @click="refresh">Refresh</button>
    </div>
    <br />
    Static Data: {{ data }}
    <div v-if="loading">Loading...</div>
    <br />
    {{ error }}
    ------------
    <br /><br />
    <div>
      Watched Data: {{ watchedData }}
      <br />
      {{ watchedError }}
    </div>
  </div>
</template>

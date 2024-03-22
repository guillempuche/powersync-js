<script setup lang="ts">
import { usePowerSync, usePowerSyncWatchedQuery } from '@journeyapps/powersync-vue';
import { ref } from 'vue';

const query = ref('SELECT * from lists');
const { data: list, error} = usePowerSyncWatchedQuery(query);

const powersync = usePowerSync();
const addList = () => {
    powersync.value.execute('INSERT INTO lists (id, name) VALUES (?, ?)', [Math.round(Math.random() * 1000), 'list name']);
}
</script>

<template>
    <input v-model="query" />
    <ul>
        <li v-for="l in list" :key="l.id">{{ l.name }}</li>
    </ul>
    <div v-if="error">{{ error }}</div>
    <button @click="addList">Add list</button>
</template>

<script setup lang="ts">
import { usePowerSyncQuery } from '@journeyapps/powersync-vue';
import { ref } from 'vue';

const query = ref('SELECT * from lists');
const { data: list, error, loading, refresh} = usePowerSyncQuery(query);
</script>

<template>
    <input v-model="query" />
    <ul>
        <li v-for="l in list" :key="l.id">{{ l.name }}</li>
    </ul>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <button @click="refresh">Refresh</button>
</template>

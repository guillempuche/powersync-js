<script setup lang="ts">
import { usePowerSync } from '@journeyapps/powersync-vue';
import { ref } from 'vue';

const list =  ref<any[]>([]);

const powersync = usePowerSync();
powersync.value.getAll('SELECT * from lists').then((l: any[]) => list.value = l);
</script>

<template>
    <ul>
        <li v-for="l in list" :key="l.id">{{ l.name }}</li>
    </ul>
</template>
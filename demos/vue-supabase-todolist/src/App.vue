<script setup lang="ts">
import TodoListDisplay from './components/TodoListDisplay.vue';
import TodoListDisplayQuery from './components/TodoListDisplayQuery.vue';
import TodoListDisplayWatchedQuery from './components/TodoListDisplayWatchedQuery.vue';
</script>

<template>
  <div>
    <TodoListDisplay />
    <TodoListDisplayQuery />
    <TodoListDisplayWatchedQuery />
  </div>
</template>

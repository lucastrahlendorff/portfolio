<template>
    <div v-for="tag in tags">
        {{ tag }}
    </div>
</template>

<style scoped>
    div {
        display: inline-block;
        font-size: 0.5em;
        padding: 0.5em 0.75em;
        background-color: var(--bg-color-secondary);
        margin-right: 0.5em;
    }
</style>

<script setup>
defineProps(['tags'])
</script>
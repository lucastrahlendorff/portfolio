<template>
    <div v-for="tag in tags">
        {{ tag }}
    </div>
</template>

<script setup>
defineProps(['tags'])
</script>
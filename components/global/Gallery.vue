<template>
<div class="gallery">
    <slot></slot>
</div>
</template>

<style>
.gallery > p {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.gallery > p > img {
    width: 50%;
    height: fit-content;
    margin: 0;
    pointer-events: none;
    flex: 0 0 50%;
    display: block;
}

</style>

<script setup>

</script>
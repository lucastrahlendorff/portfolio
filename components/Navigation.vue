<template>
    <div id="navbar" :class="menuIsOpen ? 'open' : ''">
        <div class="menu-button" @click="menuIsOpen = !menuIsOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="flex flex-col flex-nowrap" @click="menuIsOpen = !menuIsOpen">
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/projects">PROJECTS</NuxtLink>
            <NuxtLink to="/images">PICTURES</NuxtLink>
            <NuxtLink to="/music">MUSIC</NuxtLink>
            <div class="flex justify-between">
                <a href="https://github.com/lucastrahlendorff" target="_blank">Github</a>
                <a href="https://xing.com/profile/Luca_Strahlendorff" target="_blank">Xing</a>
                <a href="https://www.linkedin.com/in/luca-strahlendorff-a5984a29b" target="_blank">LinkedIn</a>
                <a href="mailto:luca.strahlendorff@outlook.de">E-Mail</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const menuIsOpen = ref(false)
</script>
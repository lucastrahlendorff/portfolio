<template>
    <div id="navbar">
        <div class="initials">LS</div>
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/projects">PROJEKTE</NuxtLink>
        <NuxtLink to="/images">BILDER</NuxtLink>
        <NuxtLink to="/music">MUSIK</NuxtLink>
    </div>
</template>

<style scoped>
    #navbar {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        /* margin-right: 200px; */
    }

    .initials {
        font-family: Playfair, sans-serif;
        font-size: 50px;
        text-align: center;
        font-weight: 900;
        width: 75px;
        height: 53px;
        background-color: white;
        color: #1b1b1b;
        margin-bottom: 100px;
    }

    div > a {
        opacity: 0.5;
        font-size: 35px;
        transition: 0.4s;
        color: inherit;
        text-decoration: none;
        line-height: 200%;
        font-weight: 700;
        letter-spacing: 0.15em;
    }

    div > a:hover, .router-link-active {
        opacity: 1;
    }
</style>
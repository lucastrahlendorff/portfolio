<template>
    <div id="navbar">
        <!-- <div class="initials">LS</div> -->
        <img class="profile-picture" src="/images/profile.jpg" alt="Profile picture">
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/projects">PROJECTS</NuxtLink>
        <NuxtLink to="/images">PICTURES</NuxtLink>
        <NuxtLink to="/music">MUSIC</NuxtLink>
    </div>
</template>

<style scoped>
    #navbar {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        /* margin-right: 200px; */
    }

    .profile-picture {
        width: 200px;
        margin-bottom: 2em;
        filter: saturate(0);
    }

    .initials {
        font-family: Playfair, sans-serif;
        font-size: 50px;
        text-align: center;
        font-weight: 900;
        width: 75px;
        height: 65px;
        background-color: white;
        color: #1b1b1b;
        margin-bottom: 50px;
        box-shadow: inset 0 -13px 0 #1b1b1b;
        border-bottom: 10px solid white;
    }

    div > a {
        opacity: 0.5;
        font-size: 2.5rem;
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
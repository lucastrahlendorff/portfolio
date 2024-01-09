<script setup>
const menuIsOpen = ref(false)
</script>

<template>
    <div id="navbar" :class="menuIsOpen ? 'open' : ''">
        <div class="menu-button" @click="menuIsOpen = !menuIsOpen">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        <div class="container" @click="menuIsOpen = !menuIsOpen">
            <img class="profile-picture" src="/images/profile.jpg" alt="Profile picture">
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/projects">PROJECTS</NuxtLink>
            <NuxtLink to="/images">PICTURES</NuxtLink>
            <NuxtLink to="/music">MUSIC</NuxtLink>
            <div class="links">
                <a href="https://github.com/lucastrahlendorff" target="_blank"><span class="icon-github"></span></a>
                <a href="https://xing.com/profile/Luca_Strahlendorff" target="_blank"><span class="icon-xing2"></span></a>
                <a href="https://www.linkedin.com/in/luca-strahlendorff-a5984a29b" target="_blank"><span class="icon-linkedin2"></span></a>
                <a href="mailto:luca.strahlendorff@outlook.de"><span class="icon-bubble"></span></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #navbar .container {
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

    .links {
        display: flex;
        justify-content: space-between;
    }

    .links a {
        width: 100%;
        font-size: 2em !important;
    }

    .menu-button {
        z-index: 1500;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1em;
        width: 50px;
        aspect-ratio: 1 / 1;
        transition: 0.4s;
        display: none;
    }

    .menu-button span.line {
        display: block;
        background-color: white;
        height: 5%;
        transition: 0.3s;
    }

    #navbar.open .menu-button {
        transform: rotate(45deg);
    }

    #navbar.open .menu-button span.line:nth-child(1){
        transform: rotate(90deg) translateX(25%);
        height: 10%;
    }

    #navbar.open .menu-button span.line:nth-child(2){
        height: 10%;
    }

    #navbar.open .menu-button span.line:nth-child(3){
        transform: rotate(90deg) translateX(-25%);
        height: 10%;
    }


    @media only screen and (max-width: 1060px) {
        #navbar .container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            padding: 2em;
            padding-bottom: 4em;
            box-sizing: border-box;
            background-color: var(--bg-color);
            z-index: 1000;
            text-align: right;
            transform: translateX(100%);
            transition: 0.2s;
        }

        #navbar.open .container {
            transform: translateX(0);
        }

        .menu-button {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        #navbar img {
            display: none;
        }

        .container {
            height: 100%;
            justify-content: flex-end;
        }

        .links {
            margin-top: 3em;
        }
    }
</style>
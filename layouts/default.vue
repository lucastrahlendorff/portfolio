<template>
    <div id="outer">
        <div id="main">
            <Navigation />
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style>
@font-face {
    font-family: 'GothamLight';
    src: URL('/fonts/Gotham Light.otf');
}

@font-face {
    font-family: 'GothamBold';
    src: URL('/fonts/Gotham Bold.otf');
}

@font-face {
    font-family: 'Playfair';
    src: URL('/fonts/PlayfairDisplay-VariableFont_wght.ttf');
}

body {
    margin: 0;
    font-family: GothamLight, serif;
    background-color: #1b1b1b;
    color: white;
}

#main {
    display: flex;
    justify-content: center;
    padding: 75px;
    gap: 175px;
}

.content {
    font-size: 4rem;
    width: 900px;
    transition: 0.5s;
}

#main:has(#navbar a:hover) .content {
    opacity: 0.5;
    filter: blur(5px);
}

h1 {
    font-size: 1.25em;
    font-family: 'GothamBold';
}

.mf-cursor {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 100%;
}

</style>
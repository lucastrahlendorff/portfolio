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

:root {
  --bg-color: #1b1b1b;
  --bg-color-secondary: #262626;
  --text-color: white;
  --secondary-opacity: 0.5;
}

body {
    margin: 0;
    font-family: GothamLight, serif;
    background-color: var(--bg-color);
    color: var(--text-color);
}

#main {
    position: absolute;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 75px;
    padding-bottom: 0;
    gap: 175px;
}

.content {
    font-size: 2rem;
    width: 900px;
    transition: 0.5s;
    overflow-y: auto;
    padding-right: 1em;
}

.hero {
    font-size: 4rem;
}

.title {
    margin-top: 0;
    line-height: 0.75em;
}

#main:has(#navbar a:hover) .content {
    opacity: var(--secondary-opacity);
    filter: blur(5px);
}

h1, h2, h3 {
    font-family: 'GothamBold';
}

a {
    color: inherit;
}

article img {
  max-width: 100%;
}

/* Scrollbar */

html {
  --scrollbarBG: #0098d9;
  --thumbBG: #90A4AE;
}
::-webkit-scrollbar {
  width: 10px;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--bg-color-secondary) #00000000;
}
::-webkit-scrollbar-track {
  background: #00000000;
}
::-webkit-scrollbar-thumb {
  background-color: var(--bg-color-secondary) ;
  border-radius: 5px;
}

</style>
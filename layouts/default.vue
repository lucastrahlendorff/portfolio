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
    display: flex;
    justify-content: center;
    padding: 75px;
    gap: 175px;
}

.content {
    font-size: 2rem;
    width: 900px;
    transition: 0.5s;
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

</style>
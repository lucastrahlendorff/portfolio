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
  --breakpoint-mobile: 600px;
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
    overflow: hidden;
}

@media only screen and (max-width: 1060px) {
  #main {
    padding: 25px;
    display: block;
  }
}

.content {
    font-size: 2rem;
    width: 900px;
    transition: 0.5s;
    overflow-y: auto;
    padding-right: 1em;
}

@media only screen and (max-width: 1060px) {
  .content {
    padding-top: 50px;
    width: 100%;
    height: 100%;
  }
}

.hero {
    font-size: 4rem;
}

@media only screen and (max-width: 1060px) {
  .hero {
    font-size: 2.25rem;
  }
}

.title {
    margin-top: 0;
    line-height: 0.75em;
    hyphens: auto;
}

@media only screen and (max-width: 1060px) { 
  .title {
    line-height: 1em;
  }
}

@media only screen and (min-width: 1061px) {
  #main:has(#navbar a:hover) .content {
    opacity: var(--secondary-opacity);
    filter: blur(5px);
  }
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

/* Icons */

@font-face {
  font-family: 'icomoon';
  src:  url('/fonts/icons.woff?ukjio7') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-headphones:before {
  content: "\e910";
}
.icon-envelop:before {
  content: "\e945";
}
.icon-bubble:before {
  content: "\e96b";
}
.icon-contrast:before {
  content: "\e9d5";
}
.icon-heart:before {
  content: "\e9da";
}
.icon-instagram:before {
  content: "\ea92";
}
.icon-github:before {
  content: "\eab0";
}
.icon-soundcloud:before {
  content: "\eac3";
}
.icon-soundcloud2:before {
  content: "\eac4";
}
.icon-xing:before {
  content: "\ead3";
}
.icon-xing2:before {
  content: "\ead4";
}
.icon-linkedin:before {
  content: "\eac9";
}
.icon-linkedin2:before {
  content: "\eaca";
}

</style>
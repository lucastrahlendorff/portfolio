<template>
    <div id="main">
        <Navigation />
        <slot />
    </div>
</template>

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

* {
    font-size: 20px;
}

body {
    margin: 0;
    font-family: GothamLight, serif;
    background-color: #1b1b1b;
    color: white;
}

#main {
    display: flex;
    padding: 75px;
    gap: 175px;
}
</style>
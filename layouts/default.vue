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

</style>
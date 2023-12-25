<template>
    <div class="hero">
    <h1>Hi. I'm Luca. </h1>
    <p>
        Welcome to my portfolio of projects and experiments in 
        <b class="clipped-text text-programming">programming</b>, 
        <b class="clipped-text text-photography">photography</b> and 
        <b class="clipped-text text-sound">sound</b>.
    </p>
    </div>
    
</template>

<style scoped>

h1 {
    margin: 0;
    line-height: 0.75em;
    font-size: 1.25em;
}

p {
    margin-top: 0.5em;
}

.clipped-text {
    font-family: 'GothamBold';
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-color: white;
    background-clip: text;
    background-size: contain;
    transition: 0.5s;
}

.clipped-text:hover {
    filter: invert(1);
}

.text-programming {
    background-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(26, 148, 164)
}

.text-photography {
    background-image: url(/images/photography.png);
}

.text-sound {
    background-image: url(/images/sound.png);
}
</style>

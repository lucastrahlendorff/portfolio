<template>
    <h1 class="title">Photo&ZeroWidthSpace;graphy</h1>
    <p>Shooting pictures. <br>Like it? See more on <a href="https://www.instagram.com/lucastrahlendorff/" target="_blank">Instagram</a>.</p>
    <div class="masonry">
        <div class="column">
            <NuxtImg src="/images/photography/1.jpg" width="300px" />
            <NuxtImg src="/images/photography/4.jpg" width="300px" />
            <NuxtImg src="/images/photography/8.jpg"/>

        </div>
        <div class="column">
            <NuxtImg src="/images/photography/2.jpg" width="300px" />
            <NuxtImg src="/images/photography/7.jpg" width="300px" />
            <NuxtImg src="/images/photography/5.jpg" width="300px" />
        </div>
        <div class="column">
            <NuxtImg src="/images/photography/3.jpg" width="300px" />
            <NuxtImg src="/images/photography/6.jpg" width="300px" />
            <NuxtImg src="/images/photography/9.jpg" width="300px" />
        </div>
    </div>
</template>

<style scoped>
    .masonry {
        --gap: 1em;
        display: flex;
        gap: var(--gap);
        width: 100%;
        overflow: hidden;
    }

    @media only screen and (max-width: 600px) {
        .masonry {
            --gap: 0;
        }
    }

     @media only screen and (min-width: 601px) {
        .masonry:has(img:hover) img:not(:hover) {
            filter: blur(2px);
        }
    }

    .column {
        line-height: 0;
        flex: 1 1 0px;
    }

    .column img {
        width: 100%;
        height: auto;
        margin-bottom: var(--gap);
        transition: 1s;
    }

</style>
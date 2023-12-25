<template>
    <h1 class="title">Projects</h1>
    <p>A list of selected projects.</p>
    <ContentList path="/projects" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink class="card" :to="article._path">
            <b>{{ article.title }}</b>
            <p>{{ article.description }}</p>
            <Tags :tags="article.tags"></Tags>
        </NuxtLink>
      </div>
    </ContentList>
</template>

<style scoped>

a {
    color: inherit;
    text-decoration: none;
}

.card h2 {
    font-size: 1.25em;
    margin-bottom: 0.25em;
    margin-top: 0;
    font-family: inherit;
    letter-spacing: 0.15em;
}

.card p {
    margin: 0;
    opacity: var(--secondary-opacity);
    transition: 0.2s;
}

.card {
    padding: 0.75em;
    border-radius: 5px;
    display: block;
    margin-bottom: 1em;
    transition: 0.2s;
}

.card:hover {
    background-color: var(--bg-color-secondary);
}
.card:hover p {
    opacity: 1;
}

</style>
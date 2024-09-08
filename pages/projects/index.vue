<template>
    <h1 class="title">Projects</h1>
    <p>A list of selected projects.</p>
    <ContentList path="/projects" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
            <b>{{ article.title }}</b>
            <p>{{ article.description }}</p>
            <Tags :tags="article.tags"></Tags>
        </NuxtLink>
      </div>
    </ContentList>
</template>
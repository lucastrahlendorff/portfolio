<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <Tags :tags="doc.tags"></Tags>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    <template #empty>
      <h1>Oh no! 👀</h1>
      This page has not been written yet. Come back later!
    </template>
    <template #not-found>
      <h1>Hmmmmm... 👀</h1>
      Sorry, but I can't find the page you are looking for.
      Maybe you will find it under <NuxtLink to="/projects">Projects</NuxtLink> ^^
    </template>
    </ContentDoc>
  </main>
</template>
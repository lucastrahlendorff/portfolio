<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="title">{{ doc.title }}</h1>
        <Tags :tags="doc.tags"></Tags>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style scoped>
.title {
  margin-bottom: 0.5em;
}
</style>
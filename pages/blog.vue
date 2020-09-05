<template>
  <main class="columns">
    <blogSelector class="column is-one-quarter" />

    <article class="column">
      <h1>{{ blog.title }}</h1>
      <nuxt-content :document="blog" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
  main {
    padding: 1rem 3rem;
  }

  article {
    padding-top: 0.75rem;
  }

  h1 {
    font-weight: bold;
    font-size: 4rem;
  }
</style>

<script>
import BlogSelector from '~/components/BlogSelector'

export default {
  name: 'Blog',
  components: {
    BlogSelector
  },

  async asyncData ({ $content }) {
    const blog = await $content('/2020/hello').fetch()

    return {
      blog
    }
  }
}
</script>

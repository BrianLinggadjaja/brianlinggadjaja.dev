<template>
  <main class="columns">
    <blogSelector :sections="sections" class="column is-one-quarter" />

    <article class="column">
      <h1>{{ latestContent.title }}</h1>
      <nuxt-content :document="latestContent" />
    </article>
  </main>
</template>

<script>
import BlogSelector from '~/components/BlogSelector'

export default {
  name: 'Blog',
  components: {
    BlogSelector
  },

  async asyncData ({ $content }) {
    const publishedSections = ['2020']
    const totalPublishedSections = publishedSections.length
    const latestSection = await $content(publishedSections[0]).fetch()
    const latestContent = await $content(latestSection[(latestSection.length - 1)].path).fetch()
    const sections = {}

    for (let i = 0; i < totalPublishedSections; i += 1) {
      const selectedSection = publishedSections[i]
      sections[selectedSection] = await $content(selectedSection).fetch()
    }

    return {
      latestContent,
      sections
    }
  }
}
</script>

<style lang="scss">
  main {
    padding: 1rem 3rem;
  }

  article {
    padding-top: 0.75rem;
  }

  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-left: -1.5rem;
  }
</style>

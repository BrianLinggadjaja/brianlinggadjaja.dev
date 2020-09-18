<template>
  <main class="columns">
    <blogSelector class="column is-one-quarter" />

    <article class="column">
      <h1>{{ selectedBlog.title }}</h1>
      <nuxt-content :document="selectedBlog" />
    </article>
  </main>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import BlogSelector from '~/components/BlogSelector'

export default {
  name: 'Blog',
  components: {
    BlogSelector
  },

  async asyncData ({ $content, store }) {
    const publishedSections = store.getters['blog/publishedSections']
    const lastItemIndex = publishedSections.length
    const listings = []

    for (let i = 0; i < lastItemIndex; i += 1) {
      const year = publishedSections[i]
      const blogs = await $content(year)
        .sortBy('createdAt', 'desc')
        .fetch()

      const listing = {}
      listing[year] = blogs
      listings.push(listing)
    }

    store.commit('blog/initalizeListings', listings)
    store.commit('blog/updateSection')
    store.commit('blog/updateBlog')
  },

  computed: {
    ...mapGetters({
      selectedBlog: 'blog/selectedBlog'
    })
  },

  mounted () {
    const storedSectionIndex = window.sessionStorage.getItem('sectionIndex')

    if (storedSectionIndex !== null) {
      this.$store.commit('blog/selectSection', parseInt(storedSectionIndex))
      this.$store.commit('blog/updateSection')
      window.sessionStorage.removeItem('sectionIndex')
    }
  },

  ...mapMutations({
    initalizeListings: 'blog/initalizeListings',
    selectSection: 'blog/selectSection',
    updateSection: 'blog/updateSection',
    selectBlog: 'blog/selectBlog'
  })
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

<template>
  <aside>
    <b-menu>
      <b-menu-list label="Sections">
        <div v-for="(item, i) in publishedSections" :key="i">
          <b-menu-item v-if="(i === sectionIndex)" class="has-text-weight-bold" icon="settings" active expanded>
            <template slot="label" slot-scope="props">
              {{ item }}
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'" />
            </template>

            <div v-for="(content, j) in listings[i][item]" :key="j">
              <b-menu-item class="has-text-weight-normal" :active="(j === blogIndex) ? 'active' : null" icon="file-document" :label="content.title" @click="updateSelectedBlog(j)" />
            </div>
          </b-menu-item>

          <b-menu-item v-else class="has-text-weight-bold" icon="settings" @click="updateSelectedSection(i)">
            <template slot="label" slot-scope="props">
              {{ item }}
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'" />
            </template>

            <div v-for="(content, j) in listings[i][item]" :key="j">
              <b-menu-item class="has-text-weight-normal" icon="file-document" :label="content.title" @click="updateSelectedBlog(j)" />
            </div>
          </b-menu-item>
        </div>
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      listings: 'blog/listings',
      publishedSections: 'blog/publishedSections',
      sectionIndex: 'blog/sectionIndex',
      blogIndex: 'blog/blogIndex'
    })
  },

  ...mapMutations({
    selectSection: 'blog/selectSection',
    updateSection: 'blog/updateSection',
    selectBlog: 'blog/selectBlog',
    updateBlog: 'blog/updateBlog'
  }),

  methods: {
    updateSelectedSection (index) {
      this.$store.commit('blog/selectSection', index)
      this.$store.commit('blog/updateSection')
      this.$store.commit('blog/selectBlog', 0)
      this.$store.commit('blog/updateBlog')
    },

    updateSelectedBlog (index) {
      this.$store.commit('blog/selectBlog', index)
      this.$store.commit('blog/updateBlog')
    }
  }
}
</script>

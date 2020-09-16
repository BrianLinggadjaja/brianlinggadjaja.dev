<template>
  <aside>
    <b-menu>
      <b-menu-list label="Sections">
        <span v-for="(item, i) in Object.keys(sections)" :key="i">
          <b-menu-item v-if="(i === 0)" class="is-reversed has-text-weight-bold" icon="settings" :active="isActive" expanded>
            <template slot="label" slot-scope="props">
              {{ item }}
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'" />
            </template>

            <b-menu-item v-for="(content, j) in sections[item]" :key="j" icon="file-document" :label="content.title" />
          </b-menu-item>

          <b-menu-item v-else class="is-reversed has-text-weight-bold" icon="settings">
            <template slot="label" slot-scope="props">
              {{ item }}
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'" />
            </template>

            <b-menu-item v-for="(content, j) in sections[item]" :key="j" icon="file-document" :label="content.title" />
          </b-menu-item>
        </span>
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script>
export default {
  props: {
    sections: {
      type: Object,
      default () {
        return { year: [] }
      }
    }
  },

  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style>
  .is-reversed ul {
    display: flex;
    flex-flow: column-reverse;
  }
</style>

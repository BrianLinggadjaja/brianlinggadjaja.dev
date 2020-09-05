<template>
  <aside>
    <b-menu>
      <b-menu-list label="Sections">
        <b-menu-item icon="settings" :active="isActive" expanded>
          <template slot="label" slot-scope="props">
            2020
            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'" />
          </template>
          <b-menu-item icon="file-document" label="Blog 0" />
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  }
}
</script>

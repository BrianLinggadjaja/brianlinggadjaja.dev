<template>
  <div>
    <b-navbar class="navbar is-primary is-spaced">
      <template slot="brand">
        <b-navbar-item href="/">
          <logo class="logo" alt="home" />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="/">
          About
        </b-navbar-item>
        <b-navbar-item href="/">
          Projects
        </b-navbar-item>
        <b-navbar-dropdown label="Blog">
          <b-navbar-item href="/blog">
            2020
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <nuxt />
  </div>
</template>

<!-- Global SCSS -->
<style lang="scss">
html {
  overflow-y: auto;
}
</style>

<!-- Local SCSS -->
<style lang="scss" scoped>
.navbar {
  padding: 0.5rem 2rem;
}

.logo {
  height: 2.5rem;
  width: 2.5rem;
}
</style>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

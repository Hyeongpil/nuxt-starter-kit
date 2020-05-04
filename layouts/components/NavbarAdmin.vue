<template>
  <b-navbar
    class="navbar header has-shadow is-primary is-10"
    role="navigation"
    aria-label="main navigation"
  >
    <template slot="brand">
      <a class="navbar-item" href="/">
        <img src="~assets/buefy.png" alt="Buefy" height="28" />
      </a>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

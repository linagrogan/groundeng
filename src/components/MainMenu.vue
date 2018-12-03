<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>GroundEng</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/dictionary" :disabled="!userName">Dictionary</b-nav-item>
        <b-nav-item to="/play">Play</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="userName" right>
          <template slot="button-content">
            <em>{{userName}}</em>
          </template>
          <b-dropdown-item @click="signOut()" href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: false
    }
  },
  methods: {
    signOut() {
      this.$root.$emit("loggedout");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
</style>

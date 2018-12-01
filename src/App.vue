<template>
  <b-container>
    <b-jumbotron header="Lorem Ipsum">
      <p>Lorem ipsum dolor sit amet.</p>
      <b-btn variant="primary" href="#">Lorem</b-btn>
    </b-jumbotron>
    <router-view>
      <!-- router -->
    </router-view>
  </b-container>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

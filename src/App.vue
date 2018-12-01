<template>
  <div>
    <main-menu class="mb-3"></main-menu>
    <b-container>
      <router-view>
        <!-- router -->
      </router-view>
    </b-container>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  components: {
    'main-menu': MainMenu
  },
  data() {
    return {}
  }
}
</script>

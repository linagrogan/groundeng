<template>
  <div>
    <main-menu class="mb-3"></main-menu>
    <b-container>
      <b-alert
        variant="warning"
        :show="dismissCountDown"
        @dismiss-count-down="countDownChanged">
        {{errorMessage}}
      </b-alert>
      <router-view>
        <!-- router -->
      </router-view>
    </b-container>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  created() {
    this.$root.$on('alert', (event) => {
      this.dismissCountDown = 5
      this.errorMessage = event.message
    })
  },
  components: {
    MainMenu
  },
  data() {
    return {
      errorMessage: 'No errors',
      dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

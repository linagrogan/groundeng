<template>
  <div>
    <main-menu :userName="user.name" class="mb-3"></main-menu>
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

    this.$root.$on('loggedin', () => {
      this.user.name = localStorage.getItem('login')
    })

    this.$root.$on('loggedout', () => {
      this.user.name = null
      localStorage.removeItem('login')
      localStorage.removeItem('sessid')
    })

    this.user.name = localStorage.getItem('login')
  },
  components: {
    MainMenu
  },
  data() {
    return {
      user: {
        name: null
      },
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

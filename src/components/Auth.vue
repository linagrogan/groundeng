<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Email address:">
        <b-form-input type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Password:">
        <b-form-input type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">
        {{noAccount ? 'Register' : 'Log in'}}
      </b-button>
    </b-form>
  </div>
</template>

<script>
/****
 * Этот компонент служит и для регистрации, и для входа в аккаунт.
 * Поведение меняется в зависимости от того, какой маршрут сейчас активен
 * в $route.path, signup или signin
 ****/

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    noAccount() {
      return this.$route.path === '/signup'
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$root.$emit('alert', { message: JSON.stringify(this.form)})
    }
  }
}
</script>

<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.email.$touch()"
                    v-model="form.email"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autofocus
                    autocomplete="email"
                  />
                  <div class="form-error" v-if="$v.form.email.$error">
                    <span class="help is-danger" v-if="!$v.form.email.required">Email is required</span>
                    <span class="help is-danger" v-if="!$v.form.email.email">Email address is not valid</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.password.$touch()"
                    v-model="form.password"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="current-password"
                  />
                  <div class="form-error" v-if="$v.form.password.$error">
                    <span class="help is-danger" v-if="!$v.form.password.required">Password is required</span>
                  </div>
                </div>
              </div>
              <button
                @click.prevent="signIn"
                :disabled="isFormValid"
                class="button is-block is-info is-large is-fullwidth"
              >Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <a>Sign In With Google</a> &nbsp;·&nbsp;
            <router-link :to="{name: 'signUp'}">Sign Up</router-link>&nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "signIn",
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  }, 
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return this.$v.form.$invalid
    }
  },
  methods: {
    signIn () {
      this.$v.form.password.$touch()
      this.$store.dispatch('auth/signIn', this.form)
        .then(() => this.$router.push('/'))
        .catch(e => {
          throw new Error(e)
        }) 
    }
  }
};
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
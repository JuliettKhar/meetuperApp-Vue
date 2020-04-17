<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.username"
                    @blur="$v.form.username.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                  />
                  <div class="form-error" v-if="$v.form.username.$error"> 
                    <span class="help is-danger" v-if="!$v.form.username.required">Username is required</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input 
                    v-model="form.name" 
                    @blur="$v.form.name.$touch()"
                    class="input is-large" 
                    type="text" 
                    placeholder="Name" 
                  />
                  <div class="form-error" v-if="$v.form.name.$error">
                    <span class="help is-danger" v-if="!$v.form.name.required">Name is required</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
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
                    v-model="form.avatar"
                    @blur="$v.form.avatar.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete
                  />
                  <div class="form-error" v-if="$v.form.avatar.$error">
                    <span class="help is-danger" v-if="!$v.form.avatar.url">Url format is not valid!</span>
                    <span class="help is-danger">Selected file type is not valid!</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                  />
                  <div class="form-error" v-if="$v.form.password.$error">
                    <span class="help is-danger" v-if="!$v.form.password.required">Password is required</span>
                    <span class="help is-danger" v-if="!$v.form.password.minLength">Password minimum length is 6 letters</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.passwordConfirmation"
                     @blur="$v.form.passwordConfirmation.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                  />
                  <div class="form-error" v-if="$v.form.passwordConfirmation.$error">
                    <span class="help is-danger" v-if="!$v.form.passwordConfirmation.required">Password is required</span>
                    <span
                      class="help is-danger"
                      v-if="!$v.form.passwordConfirmation.sameAs"
                    >Password confirmation should be the same as password</span>
                  </div>
                </div>
              </div>
              <button
                @click.prevent="signUp" 
                :disabled="isFormValid"
                type="submit" 
                class="button is-block is-info is-large is-fullwidth"
              >
              Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link :to="{name:'signIn'}">Login</router-link>&nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'

export default {
	name: 'signUp',
    data () {
      return {
        form: {
          username: null,
          name: null,
          email: null,
          avatar: null,
          password: null,
          passwordConfirmation: null
        }
      }
    },
    validations: {
      form: {
        username: {
          required
        },
        name: {
          required
        },
        email: {
          required,
          email
        },
        avatar: {
          required,
          url
        },
        password: {
          required,
          minLength: minLength(6)
        },
        passwordConfirmation: {
          required,
          sameAs: sameAs('password')
        },
      }
    },
  computed: {
    isFormValid() {
      return this.$v.form.$invalid
    }
  },
      methods: {
    signUp () {
      this.$store.dispatch('auth/signUp', this.form)
      console.log(this.form)
    }
  }
}
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
<template>
  <div>
    <Hero />
    <div class="container" v-if="isPageLoaded">
      <section class="section">
        <div class="columns">
          <div class="column">
            <div class="m-b-lg">
              <h1 class="title is-inline">Featured Meetups</h1>
              <Dropdown />
              <router-link
                v-if="user"
                :to="{name: 'PageMeetupCreate'}"
                class="button is-primary is-pulled-right m-r-sm"
              >Create Meetups</router-link>
              <router-link
                :to="{name: 'MeetupFind'}"
                class="button is-primary is-pulled-right m-r-sm"
              >All</router-link>
            </div>
          </div>
        </div>

        <div class="row columns is-multiline">
          <MeetupItem v-for="meetup in meetups" :key="meetup._id" :meetup="meetup" />
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <CategoryItem v-for="category in categories" :key="category._id" :category="category" />
          </div>
        </div>
      </section>
    </div>
    <div v-else class="container">
      <Spinner />
    </div>
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem";
import MeetupItem from "@/components/MeetupItem";
import { mapActions, mapState } from 'vuex'
import Spinner from '@/components/shared/Spinner'
import { pageLoader } from '@/mixins/pageLoader'

export default {
  components: {
    CategoryItem,
    MeetupItem,
    Spinner
  },
  mixins: [pageLoader],
  computed: {
    ...mapState({
      meetups: state => state.meetups.items,
      categories: state => state.categories.items
    })
  },
  methods: {
    ...mapActions('meetups', ['fetchMeetups']),
    ...mapActions('categories', ['fetchCategories'])
  },
  created() {
    Promise.all([this.fetchMeetups(), this.fetchCategories()])
      .then(() => this.resolveData())
      .catch((e) => {
        this.resolveData()
        throw new Error(e)
      })
    
  }
};
</script>

<style lang="scss">
.paginationContainer {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
  > li {
    display: inline;
    font-size: 18px;
    > a {
      position: relative;
      float: left;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.42857143;
      color: #00d1b2;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #ddd;
    }
    &.active {
      > a {
        z-index: 2;
        color: #fff;
        cursor: default;
        background-color: #00d1b2;
        border-color: #00d1b2;
      }
    }
    &.disabled {
      > a {
        color: #777;
        cursor: not-allowed;
        background-color: #fff;
        border-color: #ddd;
      }
    }
  }
}
</style>
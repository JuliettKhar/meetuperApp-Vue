
<template>
  <div class="container">
    <ErrorView :title="'Ooooops, you are not authenticated to visit this page, please login'"
               :status="'401'"
               :navigateToPage="'signIn'"
               :navigateToText="'Sign in'" />
  </div>
</template>

<script>
  import ErrorView from '@/components/ErrorView'
  export default {
    name: 'notAuthenticated',
    components: {
      ErrorView
    }
  }
</script>

<style scoped>
</style>
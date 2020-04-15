<template>
  <div class="container">
    <ErrorView 
        :title="'Ooooops, page you are trying to access doesn\'t exist'" 
        :navigateToText="'Navigate back Home'" 
        :status="'404'" 
        :navigateToPage="'PageHome'" 
    />
  </div>
</template>

<script>
import ErrorView from "@/components/ErrorView";

export default {
  components: {
    ErrorView
  }
};
</script>

<style scoped>
</style>
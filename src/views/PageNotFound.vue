<template>
  <div class="mt-12 px-3">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <router-link :to="{ name: 'login'}">
      <a class="go-back-link" > Go Back</a>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',

  data () {   

    return{
     
    }
  },
}
</script>

<style scoped>
  .go-back-link{
    text-decoration: underline;
    color: black !important; 
  }


</style>

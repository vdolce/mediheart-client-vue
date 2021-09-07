<template>
  <div>
    <v-app-bar
        color="rgb(255,255,255)"
        dark
        flat
        v-bind:class="[{'pl-0 pr-0': $vuetify.breakpoint.smAndDown, 'pl-12 pr-12': $vuetify.breakpoint.mdAndUp}]"
      >
      <v-toolbar-title>
        <a :href="this.landingPageUrl">
          <v-img :src="require('@/assets/img/blue_logo.png')" width="220" height="55" class="ml-2"></v-img>
        </a>
      </v-toolbar-title>
    </v-app-bar >
  </div>
</template>

<script>
export default {
  name: "LandingPageToolbar",
  data: () => ({

      landingPageUrl: `${process.env.VUE_APP_LANDING_PAGE_URL}` == 'undefined' || `${process.env.VUE_APP_LANDING_PAGE_URL}` == '' ? 'http://localhost:8080/#/login' : `${process.env.VUE_APP_LANDING_PAGE_URL}`,
    }),

}
</script>

<style scoped>
.v-application a {
  color: #ffffff !important;
}

.appbar-custom{
  max-width: 1170px;
}

.navigation_wrapper{
  display: inline;
}

.navigation_wrapper a{
  color: #0097a7 !important;  
}

.navigation_wrapper a span{  
  font-size: 18px;
}
</style>
<template>
  <div>
    <v-app-bar
        app
        color="rgb(255,255,255,0.9)"
        dark
        v-bind:class="[{'pl-0 pr-0': $vuetify.breakpoint.smAndDown, 'pl-12 pr-12': $vuetify.breakpoint.mdAndUp}]"
        elevate-on-scroll
      >
      <v-toolbar-title>
        <router-link :to="{ name: 'landing-page'}" key="home">
          <v-img :src="require('@/assets/img/blue_logo.png')" width="220" height="55" class="ml-2"></v-img>
        </router-link>
      </v-toolbar-title>
       <v-spacer></v-spacer>

        
      <!-- maggiore di md - mostra stringhe -->
      <div class="text-right navigation_wrapper" v-if="this.$vuetify.breakpoint.mdAndUp && this.$route.name!='login' && this.$route.name!='signup' ">
          <v-btn 
            text
            x-large
            v-for="item in menuItems"
            :key="item.title"
            :to="{ name: item.path}"
            class="toolbar-buttons text-capitalize"
          >
            <span class="text-capitalize">{{item.title}}</span>
          </v-btn>
      </div>

      <!-- minore di md - mostra navbar a sx -->
      <div v-if="!this.$vuetify.breakpoint.mdAndUp && this.$route.name!='login' && this.$route.name!='signup'">
        <v-app-bar-nav-icon color="primary" @click.stop="homepageDrawer = !homepageDrawer" />            
      </div>

    </v-app-bar >

  <!-- nav bar a sinistra per schermi piccoli -->
    <v-navigation-drawer
      v-model="homepageDrawer"
      v-if="!this.$vuetify.breakpoint.mdAndUp"
      app
      right       
    >
      <v-list dense>
        <v-list-item exact link color="primary"
          v-for="item in menuItems" 
          :key="item.title" 
          :to="{ name: item.path }"
          :value="item.active"
          >
          <v-list-item-action>
            <v-icon color="secondary">mdi-{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>      
      </v-list>
    </v-navigation-drawer>      
  </div>
</template>

<script>
export default {
  name: "LandingPageToolbar",
  data: () => ({
      homepageDrawer: false,

      menuItems: [
        { title: 'Signup', icon: 'account-plus', path:'signup'},        
        { title: 'Login', icon: 'login', path:'login'}      
      ],
      
    }),

}
</script>

<style>
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
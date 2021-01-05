<template>
  <v-app id="inspire">
    
    <!-- TOOLBAR -->
    <LandingPageToolbar v-if="showLandingPageToolbar() && !notFoundPage()"/>
    <NavBar v-if="!showLandingPageToolbar() && !notFoundPage()"/>
 
    <!-- CONTENT USER PAGE -->
    <v-content class="custom-container mt-12">
      <v-container class="custom-container">
        <Alert/>

        <!-- MAIN CARD -->
        <v-row>       
          <v-col cols="12" class="pt-0 pb-0">
            <v-row align="center" justify="center">       
              <v-col cols="12" class="pt-0 pb-0 card-container">
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!-- FOOTER -->
    <Footer v-if="!showLandingPageToolbar() && !notFoundPage()"/>

  </v-app>
</template>

<script>
import LandingPageToolbar from './components/LandingPageToolbar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Alert from './components/Alert'

  export default {
    name:"app",
    components:{
      LandingPageToolbar,
      NavBar,     
      Footer,
      Alert,
    },

    props: {
      source: String,
    },

    methods:{

      showLandingPageToolbar(){        
          return this.$route.name=='login' || this.$route.name=='signup';
      },

      notFoundPage(){        
          return this.$route.name=='page-not-found';
      },

    }

  }
</script>

<style>
  html{
    overflow-y: auto;
  }
</style>

<template>
  <v-app id="inspire">
    
    <!-- TOOLBAR -->
    <LandingPageToolbar v-if="showLandingPageToolbar()"/>
    <NavBar v-if="!showLandingPageToolbar()"/>
 
    <!-- CONTENT USER PAGE -->
    <v-content v-bind:class="{'custom-container':!isLandingPage()}" class="mt-12">
      <v-container fluid v-bind:class="{'custom-container':!isLandingPage()}"  v-if="!isLandingPage()">
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

    <!-- LANDING PAGE ONLY-->
    <v-row
      align="center"
      justify="center"
      v-if="isLandingPage()"
    >
      <v-col class="mb-0 pb-0">            
        <router-view></router-view>
      </v-col>
    </v-row>

    <!-- FOOTER -->
    <Footer v-if="!showLandingPageToolbar()"/>

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
          return this.$route.name=='landing-page' || this.$route.name=='login' || this.$route.name=='signup';
      },

      isLandingPage(){        
          return this.$route.name=='landing-page';
      },

    }

  }
</script>

<style>
  html{
    overflow-y: auto;
  }
</style>

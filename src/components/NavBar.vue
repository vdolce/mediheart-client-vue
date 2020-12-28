<template>
  <nav id="navbar" class="border-right">
    <v-app-bar color="primary" flat app clipped-left class="mb-3">
    <v-toolbar-title>
        <router-link :to="{ name: 'personal-info'}" key="home">        
        <v-img :src="require('@/assets/img/white_logo.png')" width="220" height="55" class="ml-2"></v-img>
        </router-link>
    </v-toolbar-title>
        
      <v-spacer></v-spacer>
      <Loader/> 
      <v-spacer></v-spacer>
     
      <!-- NOTIFICATIONS -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" >
            <v-badge color="secondary" content="1" overlap>
              <v-icon size="25" color="white">mdi-bell</v-icon>
            </v-badge>
            </v-btn>
        </template>
        <span>Notifications</span>
      </v-tooltip>

      <!-- PROFILE -->
      <v-menu offset-y left>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class="ml-1">
                <v-icon size="25" color="white" class="user-account-icon">mdi-account-circle</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-avatar color="secondary">
                  <span class="white--text headline">{{initials}}</span>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Valeria Dolce</v-list-item-title>
                <v-list-item-subtitle
                  >{{email}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        <v-divider></v-divider>
          
            <v-list >
                <v-list-item link v-for="item in userProfileMenu" :key="item.title" 
                  :to="{ name: item.path }" :value="item.active"
                  exact color="primary" 
                >
                  <v-list-item-action>
                      <v-icon color="secondary">mdi-{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content class="pr-2"> 
                      <v-list-item-title >{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link v-for="item in otherProfileMenu" :key="item.title" 
                  @click="$store.dispatch(item.action)"  :value="item.active"
                  exact color="primary" 
                >
                  <v-list-item-action>
                      <v-icon color="secondary">mdi-{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content class="pr-2"> 
                      <v-list-item-title >{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

            </v-list>           
        
        </v-card>
      </v-menu>
    </v-app-bar>
  </nav>
  
</template>

<script>
import Loader from './Loader'
export default {
    name:"navbar",
    components:{
      Loader
    },
  data: () => ({
    drawer: false,
    userProfileMenu:[
      { title: 'Settings' , icon:'cog', path:'user-settings'},
    ],

    otherProfileMenu:[
      { title: 'Log out' , icon:'logout', action:'logout'},
    ],

    email : localStorage.getItem('email'),
    initials: localStorage.getItem('email') ? localStorage.getItem('email').substring(0,1).toUpperCase() : "?"
  }),

}
</script>

<style lang="scss">
#navbar {
  .active-item {
    .v-list-item__icon {
      color:#ec407a !important;
    }
  }

  .v-navigation-drawer__border {
    width: 2px !important;
  }

  .vuebar-element {
    height: 250px;
    width: 100%;
    max-width: 500px;
    background: #dfe9fe;
  }

  .v-application a {
      color: red !important;
  }
}
</style>
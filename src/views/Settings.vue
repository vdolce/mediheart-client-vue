<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined                       
    elevation="1"
    max-width="750px"
  >         
    <v-list-item three-line>
      <v-list-item-content>            
        <v-list-item-title class="custom-title">{{ $t('Settings.title') }}</v-list-item-title>
        <v-list-item-subtitle class=" mb-4">{{ $t('Settings.subtitle') }}</v-list-item-subtitle>            
      </v-list-item-content>          
    </v-list-item>

    <div v-for="(item, index) in sections" :key="item.description" class="flex mb-4 ml-2 mr-2">
      <v-row class="my-2">
        <v-col cols="1" class="text-center" >
          <v-icon color="secondary" >mdi-{{ item.icon }}</v-icon>
        </v-col>
        <v-col cols="10">
          <p class="font-weight-normal mb-0">{{ item.description }}</p>
        </v-col>
        <v-col cols="1" class="text-center">
          <router-link :to="{ name: item.destination}">
            <v-icon color="secondary" >mdi-chevron-right</v-icon>
            </router-link>
        </v-col>
      </v-row> 
      <v-divider v-if="index != Object.keys(sections).length - 1"></v-divider>
    </div>
  </v-card>
  
</template>

<script>

export default {
  name: 'Settings',

  data: () => ({
    sections:[
      { description: "Change your password", icon:'key-variant', destination:'change-password'},
      { description: "Delete your account", icon:'trash-can-outline', destination:'delete-account'},
    ]
  })
}
</script>

<style scoped>

.header-table{
  color: #5f6368;
  
  font-size: 15px;
}

</style>

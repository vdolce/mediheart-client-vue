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
        <v-list-item-title class="custom-title">{{ $t('DeleteAccount.title') }}</v-list-item-title>
        <p class="mt-4 mb-4">{{ $t('DeleteAccount.info1') }}</p> 
        <p class="mb-4">{{ $t('DeleteAccount.info2') }}</p> 
      </v-list-item-content>          
    </v-list-item>

    

    <v-card-actions class="mb-2">
      <v-spacer></v-spacer>
      <v-btn color="secondary" outlined class="mr-2" @click="$store.dispatch('confirmDeleteAccount')">
        {{ $t('DeleteAccount.action') }}
      </v-btn>
    </v-card-actions>

  </v-card>

</template>

<script>


export default {
  name: 'DeleteAccount',

 

  data () {   

    return{
      
    }
  },

}

</script>
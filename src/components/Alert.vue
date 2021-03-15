<template>  
  <v-row>      
    <v-col cols="12" class="pt-0 pb-0 mb-2">
      <v-row
        align="center"
        justify="center"
      >      
        <v-col cols="12" class="pt-0 pb-0 card-container">
          <v-card            
            class="pl-0 pr-0 mt-0 pt-0 mb-5 pb-0 container fixed-container"                        
            flat
            max-width="750px"
          >
            <v-alert
              class="text-center mb-0"
              v-model="alert.showAlert"
              :value="alert.showAlert"
              :type="alert.type"
              dismissible=""
              transition="slide-y-reverse-transition"
            >              
              {{alert.message}}                            
            </v-alert>

          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Alert",

  data: () => ({    
    
  }),
  
  computed:{
    alert() {
        return this.$store.state.alertStore.alert;
      }
  }
};
</script>

<style scoped>
  div.fixed-container{
    min-height: 60px !important;
  }

</style>

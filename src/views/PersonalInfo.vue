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
        <v-list-item-title class="custom-title">{{ $t('PersonalInfo.title') }}</v-list-item-title>            
        <v-list-item-subtitle class=" mb-4">{{ $t('PersonalInfo.subtitle') }}</v-list-item-subtitle>          
      </v-list-item-content>          
    </v-list-item>
    
    <v-row>       
      <v-col cols="8" class="pt-0 pb-0">
        <v-simple-table class="flex" outlined>
          <template v-slot:default>            
            <tbody>
              <tr>
                <td v-bind:class="[{'first-table-column-sm': $vuetify.breakpoint.smAndDown, 'first-table-column-md': $vuetify.breakpoint.mdAndUp}]"><p class="text-uppercase mb-0 header-table">{{ headers[0].label}}</p></td>
                <td><p class="mb-0 element-table">{{ personalInfo.firstname}}</p></td>                
              </tr>
              <tr>
                <td v-bind:class="[{'first-table-column-sm': $vuetify.breakpoint.smAndDown, 'first-table-column-md': $vuetify.breakpoint.mdAndUp}]"><p class="text-uppercase mb-0 header-table">{{ headers[1].label}}</p></td>
                <td><p class="mb-0 element-table">{{ personalInfo.lastname}}</p></td>                
              </tr>
              <tr>
                <td v-bind:class="[{'first-table-column-sm': $vuetify.breakpoint.smAndDown, 'first-table-column-md': $vuetify.breakpoint.mdAndUp}]"><p class="text-uppercase mb-0 header-table">{{ headers[2].label}}</p></td>
                <td><p class="mb-0 element-table">{{personalInfo.age}}</p></td>                
              </tr>
              <tr>
                <td v-bind:class="[{'first-table-column-sm': $vuetify.breakpoint.smAndDown, 'first-table-column-md': $vuetify.breakpoint.mdAndUp}]"><p class="text-uppercase mb-0 header-table">{{ headers[3].label}}</p></td>
                <td><p class="mb-0 element-table">{{ personalInfo.gender}}</p></td>                
              </tr>            
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="4" class="mt-2 pb-0 text-center">
        <h3 class="bloodtype-style">{{ headers[4].label}}</h3>
        <h2 class="bloodtype-style2 mt-3" v-if="personalInfo.bloodType">{{ personalInfo.bloodType}}</h2>
        <h2 class="bloodtype-style2 mt-3" v-if="personalInfo.bloodType == undefined || !personalInfo.bloodType">--</h2>
      </v-col>
    </v-row>

    <v-card-actions class="mb-2">
      <v-spacer></v-spacer>        
          <v-btn color="secondary" small fab dark :to="{ name: 'personal-info-modify'}">                  
          <v-icon>mdi-pencil</v-icon>
        </v-btn>         
    </v-card-actions>

  </v-card>
  
</template>

<script>

export default {
  name: 'PersonalInfo',

  data () {   

    return{

      headers:[
        {
        label: this.$t('PersonalInfo.firstname'),
        value:"firstName"
        },
        {
        label: this.$t('PersonalInfo.lastname'),
        value:"lastName"
        },        
        {
        label: this.$t('PersonalInfo.age'),
        value:"age"        
        },        
        {
        label: this.$t('PersonalInfo.gender'),
        value:"gender"      
        },        
        {
        label: this.$t('PersonalInfo.bloodType'),
        value:"bloodType"
        }
      ],
    }
  },

  computed:{
    personalInfo() {
      return this.$store.state.personaInfoStore.personalInfo;
    }
  },
  mounted(){
    this.$store.dispatch('getPatientData')
  },
  
}
</script>

<style scoped>


.first-table-column-sm{
  min-width: 50px;
  max-width: 70px;  
}

.first-table-column-md{
  min-width: 50px;
  max-width: 70px;  
}

.header-table{
  color: #5f6368;
  font-weight: 500;
  font-size: .6875rem;
}

.element-table{
  color: #202124;  
  font-weight: 400;
  font-size: 1rem;
}

.bloodtype-style{
  margin-top: 20px;
  color: #ec407a;
  font-weight:normal;
}

.bloodtype-style2{
  margin-top: 20px;
  color: #ec407a;
  font-weight:bold;
}
</style>

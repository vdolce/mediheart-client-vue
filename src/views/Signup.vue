<template>

  <v-card            
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"                        
    flat
    outlined
    elevation="1"
    max-width="448px"
  >           
    <v-list-item three-line class="mt-0">
      <v-list-item-content> 
        <v-list-item-title class="text-center custom-title">{{ $t('Signup.title') }}</v-list-item-title>                        
      </v-list-item-content>          
    </v-list-item>

    <!-- FORM LOGIN -->
    <v-form
      ref="form"                          
      lazy-validation
      class="pl-4 pr-4"            
    >
    <v-text-field
      v-model="form.username"              
      :rules="emailRules"
      :label="$t('Common.email')"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="form.password1" 
      :rules="passwordRules"             
      type="password"
      :label="$t('Common.password')"              
      required
      outlined              
    ></v-text-field>

    <v-text-field
      v-model="form.password2"
      :rules="confirmationPasswordRules"   
      type="password"          
      :label="$t('Signup.confirmPassword')"
      required
      outlined
    ></v-text-field>

    <v-checkbox v-model="form.termsConditions" class="mt-0 pt-0">
      <template v-slot:label>
        <div>
          {{$t('Signup.accept')}}                  
          <a
            target="_blank"
            href="http://google.com"
            @click.stop
          >
            {{$t('Signup.terms')}}
          </a>
          {{$t('Signup.and')}}                    
          <a
            target="_blank"
            href="http://google.com"
            @click.stop
          >
            {{$t('Signup.conditions')}}
          </a>                               
        </div>
      </template>
    </v-checkbox>              
  </v-form>
        
    <!-- registrazione action -->
    <v-card-actions class="pl-4 pr-4">
      <v-row
        align="center"
        justify="center"
      >                
        <v-col cols="8" class="py-0 px-0" >    
            <v-btn 
              color="secondary"
              @click="$store.dispatch('signupUser')"
              rounded 
              depressed 
              large 
              block
            >
                {{$t('Signup.signupButton')}}
            </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

    <!-- login -->
    <v-card-actions class="pl-4 pr-4">
      <v-row
        align="center"
        justify="center"
      >                
        <v-col cols="12" class="text-center mt-4 mb-2">    
            {{$t('Signup.haveAlreadyAccount')}}               
          <router-link class="font-weight-bold" :to="'login'">{{$t('Signup.loginLink')}}  </router-link>
        </v-col>
      </v-row>
    </v-card-actions>

  </v-card>

</template>

<script>


export default {
  name: 'Signup',

 

  data () {   

    return{

      emailRules: [
        v => !!v || this.$t('Signup.rules.email.mandatory'),
        v => /.+@.+\..+/.test(v) || this.$t('Signup.rules.email.valid'),
      ],
      passwordRules:[
        v => {       
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
          return pattern.test(v) || this.$t('Signup.rules.password')        
        },
        v => !!v,
      ],
      confirmationPasswordRules:[
        v => {       
         return v === this.form.password1 || this.$t('Signup.rules.confirmationPassword')
        },
      ],
      
    }
  },

  computed:{
      form() {             
        return this.$store.state.signupStore.form;
      }
  }
}

</script>

<style scoped>
.custom-title{
  font-size:1.375rem !important;
  white-space: normal !important;
}

.v-application a {
    color: #0097a7 !important;
}

</style>

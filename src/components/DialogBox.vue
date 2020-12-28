<template>
  <v-row justify="center">

    <v-dialog
      v-model="dialogBox.showBox"
      max-width="400"      
    >
      <v-card>        
        <v-card-title class="headline">{{$t('DialogBox.warning')}}</v-card-title>
        <v-card-text>
          <span>{{$t('DialogBox.question')}}
            <span class="font-weight-bold primary--text">{{dialogBox.message}} </span>?
          </span>
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="secondary"
            text
            @click="dialogBox.showBox = false"
          >
            {{$t('Common.no')}}
          </v-btn>

          <v-btn
            color="secondary"
            text
            @click="$store.dispatch('affermativeAction')"
          >
            {{$t('Common.yes')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: 'DialogBox', 

  data () {   

    return{        
    }
  },

  computed:{
    dialogBox() {
        return this.$store.state.dialogBoxStore.dialogBox;
      }
  }
}
</script>

<style scoped>

</style>

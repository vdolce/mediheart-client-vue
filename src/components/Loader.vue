<template>
  <v-progress-linear
    v-model="progress"
    bottom
    absolute
    color="#ec407a"
    background-color="#fff"
    background-opacity="1"
    class="loader-position"
    :class="[{'hideLoader':!this.active}]"
    ></v-progress-linear>
</template>

<script>
export default {
  name: "Loader",

  data: () => ({

  }),

  computed:{
    progress(){
      return this.$store.state.loaderStore.loader.progress;
    },

    active(){
      return this.$store.state.loaderStore.loader.active;
    },
    
  }
};
</script>
<style scoped>	
  .hideLoader{	
    visibility: hidden;	
  }	

  .loader-position{
    margin-bottom: -4px;

  }
</style>
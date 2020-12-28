export default {    
    startProgress(state){
        // show loader
        state.loader.active = true;

        const interval = setInterval(function increment(){
                if(state.loader.progress <= 80)
                    state.loader.progress += 5
                else
                    window.clearInterval(interval)
            }
            , 50)
    },

    finishProgress(state){
        state.loader.progress = 100;

        // hide loader
        setTimeout(function () {
            state.loader.active = false;            
          }, 200)
        
        //  reset progress
        setTimeout(function () {
            state.loader.progress = 0;         
          }, 1000)                     
    },


}
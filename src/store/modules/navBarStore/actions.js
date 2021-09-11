import axios from '../../../plugins/axios'
import {router} from '../../../main'

export default{

    async logout(){ 
        await axios.post('/auth/logout/', { handlerEnabled: false })
            .then(response => {
                // go to personal-info state
                if(response.status == 200){
                    localStorage.clear();
                    router.push({name:'login'})

                    // reset all status reloading the page
                    window.location.reload();
                }
                    
            })
    
    },
}
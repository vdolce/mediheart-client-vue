import axios from '../../../plugins/axios'
import {router} from '../../../main'

export default{
    async confirmDeleteAccount(){ 
        await axios.delete('/delete_account')
        .then(response => {
            
            if(response.status == 200){
                localStorage.removeItem('patientId')
                localStorage.removeItem('token')
                localStorage.removeItem('email')
                router.push({name:'login'})

                // reset all status reloading the page
                window.location.reload()
            }
        })
    },
}
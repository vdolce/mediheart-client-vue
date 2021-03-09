import axios from '../../../plugins/axios'
import {router} from '../../../main'


export default {
    // signup user
    async confirmChangePassword({state, commit}){ 
        const formData = new FormData();
        formData.append('old_password', state.form.oldPassword)
        formData.append('new_password1', state.form.newPassword1)
        formData.append('new_password2', state.form.newPassword2)

        await axios.post('/changePassword', formData)
        .then(response => {
            
            // go to user-settings
            if(response.status == 200){                    
                console.log('Api change password - POST')
                console.log(response)

                // delete login and password
                commit('resetChangePasswordForm')

                // go to user settings
                console.log('go to user-settings')
                router.push({name:'user-settings'})
            }
        })
    },

    resetChangePassword({commit}){
        // delete login and password
        commit('resetChangePasswordForm')
        router.push({name:'user-settings'})
    }
}
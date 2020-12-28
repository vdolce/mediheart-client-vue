import axios from '../../../plugins/axios'
import {router} from '../../../main'


export default {
    // signup user
    async signupUser({state, commit}){ 
        const formData = new FormData();
        formData.append('username', state.form.username)
        formData.append('password1', state.form.password1)
        formData.append('password2', state.form.password2)

        if(state.form.termsConditions){
            await axios.post('/signup/', formData)
            .then(response => {
                
                // go to personal-info
                if(response.status == 200){                    
                    console.log('Api signup - POST')
                    console.log(response)

                    // delete login and password
                    commit('resetSignupForm')
        
                    // store session token
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('patientId', response.data.patientId)
                    localStorage.setItem('email', response.data.username)

                    // go to personal info
                    console.log('go to personal-info')
                    router.push({name:'personal-info'})
                }
            })
        }
    },

}
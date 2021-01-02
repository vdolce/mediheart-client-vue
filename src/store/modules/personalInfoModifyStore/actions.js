import axios from '../../../plugins/axios'
import {router} from '../../../main'


export default {
    async getFormData({commit}){ 
        const patientId = localStorage.getItem('patientId')
        await axios.get(`/personalInfo/modify/${patientId}`, { handlerEnabled: false })
            .then(response => {
                // go to personal-info state
                if(response.status == 200)
                    commit('setPersonalInfoModify', response.data)
                
                console.log('Api personalInfo/modify - GET')
                console.log(response)
            })
    
    },

    // confirm form Data
    async updatePersonalInfo({state, commit}){ 
        var request = {
            data: state.form.personalInfo
        }
        const patientId = localStorage.getItem('patientId')
        await axios.put(`/personalInfo/${patientId}`, request.data)
            .then(response => {
                console.log('Api personalInfo - PUT')
                console.log(response)

                // go to personal-info state
                if(response.status == 200){                              
                    console.log('go to personal-info')
                    router.push({name:'personal-info'})                    
                }
                // show success alert
                if(response.data.message)
                    commit('showAlert', response.data.message)

            })
    },

}
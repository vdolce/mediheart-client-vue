import axios from '../../../plugins/axios'
export default {
    async getPatientData({commit}){ 
        const patientId = localStorage.getItem('patientId')
        await axios.get(`/personalInfo/${patientId}`, { handlerEnabled: false })
            .then(response => { 
                commit('setPersonalInfo', response.data)
                console.log('Api PersonalInfo')
                console.log(response)
            })
    }
}
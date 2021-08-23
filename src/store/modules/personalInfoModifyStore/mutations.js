export default {
    
    setSelectLists(state, payload){
        state.form_pi_modify.gender_list = payload.data.gender_list  
        state.form_pi_modify.blood_type_list = payload.data.blood_type_list
        
    },

    setPersonalInfoModify(state, payload){
        state.form_pi_modify.personalInfo.firstname = payload.firstname  
        state.form_pi_modify.personalInfo.gender = payload.gender
        state.form_pi_modify.personalInfo.birth_date = payload.birth_date
        state.form_pi_modify.personalInfo.blood_type = payload.blood_type

    }
}
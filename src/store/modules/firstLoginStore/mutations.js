export default {
    
    setUtilityFields(state, payload){
        state.form_add_first_patient.genderList = payload.data.gender_list   
        state.form_add_first_patient.bloodTypeList = payload.data.blood_type_list
    }
}
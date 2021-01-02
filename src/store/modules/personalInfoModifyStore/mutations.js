export default {
    
    setPersonalInfoModify(state, payload){
        state.form.genderList = payload.data.genderList   
        state.form.bloodTypeList = payload.data.bloodTypeList
        state.form.personalInfo = payload.data.personalInfo   
    }
}
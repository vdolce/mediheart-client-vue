export default {
    setPersonalInfo(state, res){
        state.form_personal_info.personalInfo.firstname = res.firstname
        state.form_personal_info.personalInfo.blood_type = res.blood_type.label
        state.form_personal_info.personalInfo.age = res.age
        state.form_personal_info.personalInfo.gender = res.gender
    }
}
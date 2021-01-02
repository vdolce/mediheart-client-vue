export default {
    resetSignupForm(state){
        state.form.username = ""
        state.form.password1 = ""
        state.form.password2 = ""
        state.form.termsConditions = false
    }
}

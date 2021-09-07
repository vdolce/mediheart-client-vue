export default {    
    showAlert(state, res){
        state.alert.showAlert = true
        state.alert.message = res.message
        state.alert.type = res.type
    },

    resetAlert(state){
        state.alert.showAlert = false
        state.alert.message = ""
        state.alert.type = "warning"
    },

    errorAlert(state, errorMessage){
        state.alert.showAlert = true
        state.alert.message = errorMessage
        state.alert.type = "error"
    },

    infoAlert(state, infoMessage){
        state.alert.showAlert = true
        state.alert.message = infoMessage
        state.alert.type = "info"
        state.alert.dismissible=false
    },
}
export default {    
    setDialogBox(state, payload){
        state.dialogBox.showBox = true
        state.dialogBox.id = payload.id
        state.dialogBox.message = payload.name
        state.dialogBox.affermativeAction = payload.affermativeAction
    },

    resetDialogBox(state){
        state.dialogBox.showBox = false
        state.dialogBox.id = {}
        state.dialogBox.message = ""
        state.dialogBox.affermativeAction = ""
    },

}
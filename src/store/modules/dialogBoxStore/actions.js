export default {
    showDialogBox({commit}, payload){
        console.log("INSIDE SHOWDIALOGBOX")
        console.log(payload)

        commit('setDialogBox', payload)
    },

    affermativeAction({state, dispatch, commit}){        
        // calling action relative to View from whom I opened the dialogBox
        // Example: call deleteAllergie after click yes on dialogBox opened in PersonalMedicalHistory (allergies section)
        dispatch(state.dialogBox.affermativeAction, state.dialogBox.id)

        // reset dialogBox
        commit('resetDialogBox')     
    },
}
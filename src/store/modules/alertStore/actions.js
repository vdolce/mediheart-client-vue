// import axios from '../../../plugins/axios'
// import {router} from '../../../main'


export default {

    // to be used on mounted of each view
    resetAlertQueue({commit}){
        commit('resetAlert')
    },

    activeErrorAlert({commit}, message){
        commit('errorAlert', message)
    },

    activeInfoAlert({commit}, message){
        commit('infoAlert', message)
    }
            
}
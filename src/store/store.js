import Vue from "vue";
import Vuex from "vuex";

// VIEWS
import personaInfoStore from  "./modules/personalInfoStore/index";
import loginStore from  "./modules/loginStore/index";
import signupStore from  "./modules/signupStore/index";
import changePasswordStore from  "./modules/changePasswordStore/index";
import personalInfoModifyStore from  "./modules/personalInfoModifyStore/index";

// COMPONENTS
import alertStore from  "./modules/alertStore/index";
import dialogBoxStore from  "./modules/dialogBoxStore/index";
import loaderStore from  "./modules/loaderStore/index";
import navBarStore from  "./modules/navBarStore/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    // VIEWS
    personaInfoStore: personaInfoStore,
    personalInfoModifyStore: personalInfoModifyStore,
    loginStore: loginStore,
    signupStore: signupStore,
    changePasswordStore: changePasswordStore,

    // COMPONENTS
    alertStore: alertStore,
    dialogBoxStore: dialogBoxStore,
    loaderStore: loaderStore,
    navBarStore: navBarStore,
  } 
});

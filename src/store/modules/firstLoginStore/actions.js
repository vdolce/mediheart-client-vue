import axios from "../../../plugins/axios";
// import {router} from '../../../main'

export default {
  async prepareForm({ commit }) {
    await axios.get(`/patients/prepare-form/`).then((response) => {
      // go to personal-info state
      if (response.status == 200) commit("setUtilityFields", response.data);

      console.log("Api personalInfo/modify - GET");
      console.log(response);
    });
  },

  async createPatient({state, commit}) {

    var request = {
      data: state.form_add_first_patient.personalInfo,
    };
    
    await axios
      .post(`/patients/`, request.data)
      .then((response) => {
        console.log("Api Patients - POST");
        console.log(response);

        // go to personal-info state
        if (response.status == 200) {
          console.log("going to personal-info");
          // router.push({ name: "personal-info" });
        }
        // show success alert
        if (response.data.message) commit("showAlert", response.data.message);
      });
  },
};

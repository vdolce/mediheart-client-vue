import axios from "../../../plugins/axios";
import { router } from "../../../main";

export default {

  async prepareForm({ state, commit }) {
    
    await axios.get(`/patients/prepare-form/`).then((response) => {
      // go to personal-info state
      if (response.status == 200) commit("setSelectLists", response.data);

      console.log("Api personalInfo/modify - GET");
      console.log("check blood type list in prepare")
      console.log(state.form_pi_modify.blood_type_list)
    });

    await axios.get(`/patients/user/`).then((response) => {
        localStorage.setItem("patient_id", response.data[0].id);
        console.log("Api PersonalInfo");
        console.log(response);
        if (response.status >= 200) {
          commit("setPersonalInfoModify", response.data[0]);
          //console.log(state.form_pi_modify.personalInfo.blood_type.id)
        }
    });
    
  },

  // confirm form Data
  async updatePersonalInfo({ state, commit }) {
  
    var request = {
      data: state.form_pi_modify.personalInfo,
    };  
    request.data["blood_type"] = state.form_pi_modify.personalInfo.blood_type.id;

    const patient_id = localStorage.getItem("patient_id");
    console.log(request.data);

    await axios
      .patch(`/patients/${patient_id}/`, request.data)
      .then((response) => {
        console.log("Api personalInfo - PATCH");
        console.log(response);

        // go to personal-info state
        if (response.status == 200) {
          router.push({ name: "personal-info" });
        }
        // show success alert
        if (response.data.message) commit("showAlert", response.data.message);
      });
  },
};

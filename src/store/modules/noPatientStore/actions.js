import axios from "../../../plugins/axios";


export default {
  async getFormData2({ commit }) {
    await axios.get(`/patients/prepare-form/`).then((response) => {
      // go to personal-info state
      if (response.status == 200) commit("setUtilityFields", response.data);

      console.log("Api personalInfo/modify - GET");
      console.log(response);
    });
  },
};

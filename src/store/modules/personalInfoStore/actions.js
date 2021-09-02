import axios from "../../../plugins/axios";

export default {
  async getPatientData({ commit }) {

    //retrieve informations by token passed.
    await axios.get(`/patients/user/`).then((response) => {
      console.log("Api PersonalInfo");
      console.log(response);
      if (response.status >= 200) {
        commit("setPersonalInfo", response.data[0]);
      }
    });
  },
};

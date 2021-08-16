import axios from "../../../plugins/axios";
import { router } from "../../../main";

export default {
  // login user
  async loginUser({ state, commit }) {
    
    var request = state.form;
    console.log("printing username and pass:" + request.username + " " + request.password);
    
    await axios.post("/auth/api-token-auth/", request).then((response) => {
      // go to personal-info
      if (response.status == 200) {
        console.log("Api login - POST");
        console.log(response);

        // delete login and password
        commit("resetLoginForm");

        // store session token
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("patientId", response.data.patientId);
        // localStorage.setItem("email", response.data.username);
        console.log(localStorage);

        // go to personal-info
        console.log("go to personal-info");
        router.push({ name: "personal-info" });
      }
    });
  },
};

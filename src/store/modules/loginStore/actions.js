import axios from "../../../plugins/axios";
import { router } from "../../../main";

export default {
  // login user
  async loginUser({ state, commit }) {
    var request = state.form;
    console.log(
      "printing username and pass:" + request.username + " " + request.password
    );

    await axios.post("/auth/login/", request).then((response) => {
      // go to personal-info
      if (response.status == 200) {
        console.log("Api login - POST");
        console.log(response);

        // delete login and password
        commit("resetLoginForm");

        // store session token
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("is_first_login", response.data.is_first_login);
        console.log(localStorage);

        // Go the next page
        console.log("go to personal-info");

        if (response.data.is_first_login)
          router.push({ name: "first-login" });
        else 
          router.push({ name: "personal-info" });
      }
    });
  },
};

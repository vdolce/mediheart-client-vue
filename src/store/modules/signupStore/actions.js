import axios from "../../../plugins/axios";
import { router } from "../../../main";
import i18n from "./../../../plugins/i18n";

export default {
  // signup user
  async signupUser({ state, commit, dispatch }) {
    const formData = new FormData();
    formData.append("username", state.form.username);
    formData.append("password1", state.form.password1);
    formData.append("password2", state.form.password2);

    if (state.form.termsConditions) {
      await axios.post("/auth/signup/", formData).then((response) => {
        // go to personal-info
        if (response.status == 200) {
          console.log("Api signup - POST");
          console.log(response);

          // delete login and password
          commit("resetSignupForm");

          // store session token
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("is_first_login", response.data.is_first_login);

          
          // go to personal info
          console.log("go to first-login");
          router.push({ name: "first-login" });
        }
      });
    } else dispatch("activeErrorAlert", i18n.t("Signup.termsConditionsError"));
  },
};

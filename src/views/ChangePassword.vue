<template>
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="750px"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="custom-title">{{
          $t("ChangePassword.title")
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-form ref="form" lazy-validation class="pl-4 pr-4">
      <v-text-field
        v-model="form.oldPassword"
        type="password"
        :label="$t('ChangePassword.oldPassword')"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="form.newPassword1"
        :rules="passwordRules"
        type="password"
        :label="$t('ChangePassword.newPassword1')"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="form.newPassword2"
        :rules="confirmationPasswordRules"
        type="password"
        :label="$t('ChangePassword.newPassword2')"
        required
        outlined
      ></v-text-field>
    </v-form>

    <v-card-actions class="mb-2">
      <v-spacer></v-spacer>

      <v-btn
        class="mr-4"
        outlined
        color="secondary"
        @click="$store.dispatch('resetChangePassword')"
        link
      >
        {{ $t("Common.cancel") }}
      </v-btn>
      <v-btn
        color="secondary"
        class="mr-2"
        @click="$store.dispatch('confirmChangePassword')"
        :disabled="!isComplete"
      >
        {{ $t("Common.confirm") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ChangePassword",

  data() {
    return {
      passwordRules: [
        (v) => {
          const pattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
          return pattern.test(v) || this.$t("ChangePassword.rules.newPassword");
        },
        (v) => !!v,
      ],
      confirmationPasswordRules: [
        (v) => {
          return (
            v === this.form.newPassword1 ||
            this.$t("ChangePassword.rules.confirmationPassword")
          );
        },
      ],
    };
  },

  computed: {
    form() {
      return this.$store.state.changePasswordStore.form;
    },

    isComplete() {
      var formData = this.$store.state.changePasswordStore.form;

      return (
        formData.oldPassword &&
        formData.newPassword1 &&
        formData.newPassword2 
      );
    },
  },
};
</script>

<style scoped>
.custom-title {
  font-size: 1.375rem !important;
  white-space: normal !important;
}
.v-btn:before {
  background-color: #fff !important ;
}
</style>

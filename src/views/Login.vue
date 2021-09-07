<template>
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="448px"
  >
    <v-list-item three-line class="mt-0">
      <v-list-item-content>
        <v-list-item-title class="text-center custom-title">{{
          $t("Login.title")
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- FORM LOGIN -->
    <v-form v-model="isFormValid" ref="form" lazy-validation class="pl-4 pr-4">
      <v-text-field
        class="mb-2"
        v-model="form.username"
        :label="$t('Common.email')"
        :rules="emailRules"
        required
        outlined
        
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :label="$t('Common.password')"
        :append-icon="showPassword ? 'visibility' : 'visibility_off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        v-on:keyup.enter="$store.dispatch('loginUser')"
        required
        outlined
      ></v-text-field>
    </v-form>

    <!-- login action -->
    <v-card-actions class="mt-0 mb-2 pl-4 pr-4">
      <v-row>
        <v-col cols="5" offset="7">
          <v-btn
            color="secondary"
            rounded
            depressed
            large
            block
            @click="$store.dispatch('loginUser')"
          >
            {{ $t("Login.loginButton") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

    <!-- divider -->
    <v-divider></v-divider>

    <!-- signup -->
    <v-card-actions class="mt-6 mb-6 pl-4 pr-4">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          {{ $t("Login.noAccount") }}
        </v-col>
        <v-col cols="12">
          <v-btn
            color="secondary"
            :to="{ name: 'signup' }"
            key="signup"
            rounded
            large
            block
            outlined
          >
            {{ $t("Login.signupButton") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      title: 'Preliminary report',
      isFormValid: false,
      showPassword: false,
      emailRules: [
        (v) => !!v || this.$t("Login.rules.email.mandatory"),
        (v) => /.+@.+\..+/.test(v) || this.$t("Login.rules.email.valid"),
      ],
    };
  },

  computed: {
    form() {
      return this.$store.state.loginStore.form;
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <!-- Introduction Card -->
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="750px"
  >

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="custom-title">
          <v-icon large left> mdi-clipboard-account-outline </v-icon>
          {{
            $t("firstLogin.Welcome")
          }}
        </v-list-item-title>
        <v-list-item-subtitle class="mb-4">
          {{ $t("firstLogin.WelcomeSubTitle") }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-form ref="form" v-model="valid" lazy-validation class="pl-4 pr-4">
      <!-- firstname -->
      <v-text-field
        v-model="form.personalInfo.firstname"
        v-bind:label="$t('firstLogin.firstname')"
        required
        outlined
      ></v-text-field>

      <!-- gender -->
      <v-select
        v-model="form.personalInfo.gender"
        :items="form.genderList"
        item-text="label"
        item-value="id"
        v-bind:label="$t('firstLogin.gender')"
        required
        outlined
        hide-details
        :menu-props="{ top: false, offsetY: true }"
      ></v-select>

      <!-- Birthdate and BloodType -->
      <v-row class="mb-5 mt-4">
        <v-col cols="12" md="6" sm="12">
          <v-menu
            v-model="birthDateMenu"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.personalInfo.birth_date"
                v-bind:label="$t('PersonalInfoModify.birthDate')"
                v-bind="attrs"
                readonly
                v-on="on"
                flat
                outlined
                hide-details
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.personalInfo.birth_date"
              min="1900-01-01"
              :max="getTodayDate()"
              header-color="primary"
              color="secondary"
              :locale="this.$i18n.locale"
              @input="birthDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-select
            v-model="form.personalInfo.blood_type"
            :items="form.bloodTypeList"
            item-text="label"
            item-value="id"
            v-bind:label="$t('PersonalInfoModify.bloodType')"
            required
            outlined
            hide-details
            :menu-props="{ top: true, offsetY: true }"
          ></v-select>
        </v-col>
      </v-row>
    </v-form>

    <v-card-actions class="mb-2">
      <v-spacer></v-spacer>
      <v-btn
        color="secondary"
        class="mr-2"
        :disabled="!isComplete"
        @click="$store.dispatch('createPatient')"
      >
        {{ $t("Common.confirm") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FirstLogin",

  data() {
    return {
      birthDateMenu: false,
      valid: false,
      nameRules: [
        (v) => (v ? v.length > 2 || this.$t("firstLogin.rules.minLength") : ""),
        (v) =>
          /^[aA-zZàèéìòù ']{2,30}$/.test(v) ||
          this.$t("firstLogin.rules.onlyLetters"),
      ],
    };
  },

  computed: {
    form() {
      var formData = this.$store.state.firstLoginStore.form_add_first_patient;
      // initialize the birthDate calendar
      if (
        formData.personalInfo.birth_date == "" ||
        formData.personalInfo.birth_date == undefined
      )
        formData.personalInfo.birth_date = this.getTodayDate();
      return formData;
    },

    isComplete() {
      var formData = this.$store.state.firstLoginStore.form_add_first_patient;
      return (
        formData.personalInfo.firstname &&
        formData.personalInfo.blood_type &&
        formData.personalInfo.gender &&
        formData.personalInfo.birth_date
      );
    },
  },

  mounted() {
    this.$store.dispatch('prepareForm')
  },

  methods: {
    getTodayDate() {
      return new Date().toISOString().substr(0, 10);
    },

    uppercase() {
      this.fiscalCode = this.fiscalCode.toUpperCase();
    },
  },
};
</script>

<style scoped>
</style>

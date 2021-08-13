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
          $t("PersonalInfoModify.title")
        }}</v-list-item-title>
        <v-list-item-subtitle class="mb-4">{{
          $t("PersonalInfoModify.subtitle")
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-form ref="form" v-model="valid" lazy-validation class="pl-4 pr-4">
      <v-text-field
        v-model="form.personalInfo.firstname"
        :rules="nameRules"
        v-bind:label="$t('PersonalInfoModify.firstname')"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="form.personalInfo.lastname"
        :rules="nameRules"
        v-bind:label="$t('PersonalInfoModify.lastname')"
        required
        outlined
      ></v-text-field>

      <v-select
        v-model="form.personalInfo.gender"
        :items="form.genderList"
        item-text="label"
        item-value="id"
        v-bind:label="$t('PersonalInfoModify.gender')"
        required
        outlined
        hide-details
        :menu-props="{ top: false, offsetY: true }"
      ></v-select>

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
                v-model="form.personalInfo.birthDate"
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
              v-model="form.personalInfo.birthDate"
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
            v-model="form.personalInfo.bloodType"
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
        class="mr-4"
        outlined
        :to="{ name: 'personal-info' }"
      >
        {{ $t("Common.cancel") }}
      </v-btn>

      <v-btn
        color="secondary"
        class="mr-2"
        @click="$store.dispatch('updatePersonalInfo')"
      >
        {{ $t("Common.confirm") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PersonalInfoModify",

  data() {
    return {
      birthDateMenu: false,
      valid: false,
      nameRules: [
        (v) => v ? v.length > 2 || this.$t("PersonalInfoModify.rules.minLength") : "",
        (v) =>/^[aA-zZàèéìòù ']{2,30}$/.test(v) ||
              this.$t("PersonalInfoModify.rules.onlyLetters"),
      ],
    };
  },

  computed: {
    form() {
      var formData = this.$store.state.personalInfoModifyStore.form;
      // initialize the birthDate calendar
      if (
        formData.personalInfo.birthDate == "" ||
        formData.personalInfo.birthDate == undefined
      )
        formData.personalInfo.birthDate = this.getTodayDate();
      return formData;
    },
  },

  mounted() {
    this.$store.dispatch("getFormData");
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
.first-table-column {
  min-width: 30px;
  max-width: 60px;
}

.header-table {
  color: #5f6368;
  font-weight: 500;
  font-size: 0.6875rem;
}

.element-table {
  color: #202124;
  font-weight: 400;
  font-size: 1rem;
}

.fiscal-code-style input {
  text-transform: uppercase;
}

.v-btn:before {
  background-color: #fff !important ;
}
</style>

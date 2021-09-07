<template>
  <v-row>
    <!-- **************************************************            
                INITIAL SECTION
    *******************************************************-->
    <v-col cols="12" class="pt-0 pb-0">
      <v-row align="center" justify="center">
        <v-col cols="12" class="pt-0 pb-0 card-container">
          <v-card
            class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
            flat
            max-width="1024px"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="5"
                sm="12"
                class="pt-0 pb-0"
                v-bind:class="[
                  {
                    'text-center': $vuetify.breakpoint.smAndDown,
                    'text-left': $vuetify.breakpoint.mdAndUp,
                  },
                ]"
              >
                <h1
                  class="custom-title text-wrap"
                  v-if="this.$vuetify.breakpoint.mdAndUp"
                >
                  {{ $t("LandingPage.title.part1") }} <br />
                  {{ $t("LandingPage.title.part2") }}
                </h1>
                <h1
                  class="custom-title text-wrap"
                  v-if="this.$vuetify.breakpoint.smAndDown"
                >
                  {{ $t("LandingPage.title.part1") }}
                  {{ $t("LandingPage.title.part2") }}
                </h1>
                <p class="custom-subtitle">
                  {{ $t("LandingPage.subtitle.part1") }} <br />
                  {{ $t("LandingPage.subtitle.part2") }}
                </p>
              </v-col>
              <v-col
                cols="12"
                md="7"
                sm="12"
                class="pt-0 pb-0"
                align="center"
                justify="center"
              >
                <v-img
                  :src="require('@/assets/img/final_landing_img.png')"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!-- **************************************************            
            SEZIONE INTERMEDIA CON ALTRE INFO 
    *******************************************************-->
    <v-col cols="12" class="pt-0 pb-0 mt-12">
      <v-row
        align="center"
        justify="center"
        color="secondary"
        class="intermediate-section"
      >
        <v-col cols="12" class="pt-0 pb-0 card-container">
          <v-card
            class="pl-3 pr-3 mt-0 pt-5 mb-0 pb-5 container"
            flat
            max-width="1024px"
            color="rgb(160 39 79)"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="7"
                sm="12"
                class="pt-0 pb-0"
                align="center"
                justify="center"
                v-if="this.$vuetify.breakpoint.mdAndUp"
              >
                <v-img
                  :src="require('@/assets/img/personal-info-demo.png')"
                  class="intermediate-image"
                ></v-img>
              </v-col>

              <v-col cols="12" md="5" sm="12" class="pt-0 pb-0 text-center">
                <h3 class="intermediate-title">
                  {{ $t("LandingPage.intermediateSection.title") }}
                </h3>
                <p class="intermediate-subtitle">
                  {{ $t("LandingPage.intermediateSection.subtitle") }}
                </p>
              </v-col>

              <v-col
                cols="12"
                md="7"
                sm="12"
                class="pt-0 pb-0"
                align="center"
                justify="center"
                v-if="!this.$vuetify.breakpoint.mdAndUp"
              >
                <v-img
                  :src="require('@/assets/img/personal-info-demo.png')"
                  class="intermediate-image"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!-- **************************************************            
                THREE MAIN FEATURES SECTION
    *******************************************************-->
    <v-col cols="12" class="pt-5 pb-5 mt-12">
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" sm="12" class="pt-0 pb-0 card-container">
          <v-card
            class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
            flat
            max-width="1024px"
          >
            <v-row>
              <!-- box 1 -->
              <v-col cols="12" md="4" sm="12" xs="12">
                <v-card
                  class="ma-3 pa-6"
                  tile
                  flat
                  align="center"
                  justify="center"
                >
                  <div>
                    <v-img
                      :src="require('@/assets/img/blood_type.png')"
                      :contain="true"
                      max-height="190px"
                      max-width="190px"
                    ></v-img>
                  </div>
                  <h2 class="text-center primary-title mt-5">
                    {{ $t("LandingPage.boxSection.box1.title") }}
                  </h2>
                  <p
                    class="text-center mt-2 font-weight-normal box-description"
                  >
                    {{ $t("LandingPage.boxSection.box1.description") }}
                  </p>
                </v-card>
              </v-col>

              <!-- box 2 -->
              <v-col cols="12" md="4" sm="12" xs="12">
                <v-card
                  class="ma-3 pa-6"
                  tile
                  flat
                  align="center"
                  justify="center"
                >
                  <div>
                    <v-img
                      :src="require('@/assets/img/Folder.png')"
                      :contain="true"
                      max-height="185px"
                      max-width="185px"
                    ></v-img>
                  </div>
                  <h2 class="text-center primary-title mt-5">
                    {{ $t("LandingPage.boxSection.box2.title") }}
                  </h2>
                  <p
                    class="text-center mt-2 font-weight-normal box-description"
                  >
                    {{ $t("LandingPage.boxSection.box2.description") }}
                  </p>
                </v-card>
              </v-col>

              <!-- box 3 -->
              <v-col cols="12" md="4" sm="12" xs="12">
                <v-card
                  class="ma-3 pa-6"
                  tile
                  flat
                  align="center"
                  justify="center"
                >
                  <div>
                    <v-img
                      :src="require('@/assets/img/hearth_security.png')"
                      :contain="true"
                      max-height="200px"
                      max-width="200px"
                    ></v-img>
                  </div>
                  <h2 class="text-center primary-title mt-5">
                    {{ $t("LandingPage.boxSection.box3.title") }}
                  </h2>
                  <p
                    class="text-center mt-2 font-weight-normal box-description"
                  >
                    {{ $t("LandingPage.boxSection.box3.description") }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <!-- **************************************************            
            FINAL SECTION - FOOTER 
*******************************************************-->
    <v-col cols="12" class="pt-0 pb-0">
      <v-row align="center" justify="center" class="footer-landing">
        <v-col cols="12" md="10" sm="12" class="pt-0 pb-0 card-container">
          <v-card
            class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
            flat
            max-width="1024px"
            color="primary"
          >
            <v-row
              align="start"
              justify="start"
              v-bind:class="[
                {
                  'text-center': $vuetify.breakpoint.smAndDown,
                  'text-left': $vuetify.breakpoint.mdAndUp,
                },
              ]"
            >
              <v-col cols="12" md="4" sm="12" class="pt-0 pb-0 mt-8">
                <v-img
                  :src="require('@/assets/img/white_logo.png')"
                  width="220"
                  height="55"
                  class="ml-6 footer-img"
                ></v-img>
              </v-col>

              <!-- CONTACTS -->
              <v-col cols="12" md="3" sm="12" class="pt-0 pb-0 mt-12">
                <h3 class="white--text mb-4">Contacts</h3>
                <ul id="contact-list" class="nobull pl-0">
                  <li
                    v-for="item in contactList"
                    :key="item.link"
                    class="white--text mb-4"
                  >
                    {{ item.link }}
                  </li>
                </ul>
              </v-col>
              <!-- COMPANY -->
              <v-col cols="12" md="3" sm="12" class="pt-0 pb-0 mt-12">
                <h3 class="white--text mb-4">Company</h3>
                <ul id="contact-list" class="nobull pl-0">
                  <li
                    v-for="item in contactList"
                    :key="item.link"
                    class="white--text mb-4"
                  >
                    {{ item.link }}
                  </li>
                </ul>
              </v-col>
              <!-- LEGAL -->
              <v-col cols="12" md="2" sm="12" class="pt-0 pb-0 mt-12">
                <h3 class="white--text mb-4">Legal</h3>
                <ul id="contact-list" class="nobull pl-0">
                  <li
                    v-for="item in contactList"
                    :key="item.link"
                    class="white--text mb-4"
                  >
                    {{ item.link }}
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" md="12" sm="12" class="pt-0 pb-0">
                <v-divider color="white" class="mt-3"></v-divider>
              </v-col>

              <v-col
                cols="12"
                md="6"
                sm="12"
                class="pt-0 pb-0"
                v-bind:class="[
                  {
                    'text-center': $vuetify.breakpoint.smAndDown,
                    'text-left': $vuetify.breakpoint.mdAndUp,
                  },
                ]"
              >
                <p class="copyright-text mt-4 mb-3 ml-2">
                  © Digiclover - All rights reserved.
                </p>
              </v-col>

              <!-- social media icons  -->
              <v-col
                cols="12"
                md="6"
                sm="12"
                class="pt-0 pb-0 mt-3 mb-4"
                v-bind:class="[
                  {
                    'text-center': $vuetify.breakpoint.smAndDown,
                    'text-right': $vuetify.breakpoint.mdAndUp,
                  },
                ]"
              >
                <v-btn
                  href="https://twitter.com/"
                  icon
                  target="_blank"
                  class="mr-3"
                >
                  <v-icon color="white">mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  href="https://www.facebook.com/"
                  icon
                  target="_blank"
                  class="mr-3"
                >
                  <v-icon color="white">mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  href="https://instagram.com/"
                  icon
                  target="_blank"
                  class="mr-3"
                >
                  <v-icon color="white">mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  href="https://linkedin.com/"
                  icon
                  target="_blank"
                  class="mr-3"
                >
                  <v-icon color="white">mdi-linkedin</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// import axios from 'axios';

export default {
  name: "LandingPage",

  data() {
    return {
      contactList: [{ link: "About" }, { link: "Contact" }, { link: "Policy" }],
    };
  },

  mounted() {},
};
</script>

<style scoped>
.container {
  display: inline-block !important;
  text-align: left !important;
}

.card-container {
  text-align: center !important;
}

.custom-title {
  font-size: 40px !important;
}

.custom-subtitle {
  font-size: 18px !important;
  color: rgba(42, 39, 48, 0.7);
}

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

.aling-img {
  text-align: center;
  display: block;
}

.copyright-text {
  color: #fff;
  font-size: 16px;
}

.footer-landing {
  background: #0097a7;
}

.box-description {
  font-size: 16px !important;
  color: rgba(42, 39, 48, 0.7);
}
.nobull {
  list-style-type: none;
}

.footer-img {
  display: inline-block;
}

.intermediate-section {
  background: rgb(160 39 79);
}

.intermediate-title {
  font-size: 30px !important;
  color: #fff;
}

.intermediate-image {
  border-radius: 10px;
}

.intermediate-subtitle {
  font-size: 18px !important;
  color: rgba(255, 255, 255, 0.6);
}
</style>

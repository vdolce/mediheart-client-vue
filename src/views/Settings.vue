<template>
  <v-card
    class="pl-3 pr-3 mt-0 pt-0 mb-0 pb-0 container"
    flat
    outlined
    elevation="1"
    max-width="650px"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="custom-title">{{
          $t("Settings.title")
        }}</v-list-item-title>
        <v-list-item-subtitle class="mb-4">{{
          $t("Settings.subtitle")
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :disabled="item.disabled"
          :to="{ name: item.link }"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Settings",

  data: () => ({
    items: [
      {
        text: "Change your password",
        icon: "mdi-key-variant",
        disabled: false,
        color: "secondary",
        link: "change-password",
      },
      // {
      //   text: "Delete your account",
      //   icon: "mdi-trash-can-outline",
      //   disabled: false,
      //   color: "secondary",
      //   link: "change-password",
      // },
    ],
  }),

  mounted() {
    console.log(this.items);
    const blocked_usernames = ["guest@mediheart.com", "admin"];
    if (blocked_usernames.includes(localStorage.getItem("username"))) {
      this.items = this.items.map((e) => {
        e.disabled = true;
        e.color = "grey";
        return e;
      });
      //console.log(this.items);
      this.$store.dispatch(
        "activeInfoAlert",
        this.$t("Settings.test_account_alert")
      );
    }
    console.log("after");
    console.log(this.items);
  },
};
</script>

<style scoped>
.header-table {
  color: #5f6368;

  font-size: 15px;
}
</style>

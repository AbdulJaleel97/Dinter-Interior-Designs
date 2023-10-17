<template>
  <MainNavbar />
  <router-view />
  <FooterView />
</template>

<script>
import MainNavbar from "@/views/MainNavbar.vue";
import FooterView from "@/views/FooterView.vue";
export default {
  components: {
    MainNavbar,
    FooterView,
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #e8b681;
}
// Global Styles
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  --main-color: #e8b681;
  --bg-color: #303040;
}

body {
  color: #13120d;
  background-color: #fffbf3;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #13120d;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: 1600px !important;
  }
}
@media (min-width: 960px) {
  .v-container {
    max-width: 1200px;
  }
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>

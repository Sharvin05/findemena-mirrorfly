<template>
  <AppBar/>
  <div class="view-port" >
      <router-view></router-view>
  </div>
</template>
<script>
import { store } from "@/store/store.js";

export default {
  beforeMount() {
    const language = store.getLocalLanguage();
    store.currentLanguage=language
    if (language) {
      this.$i18n.locale = language;
    }

  },
};
</script>
<style lang="scss" scoped>
.view-port{
  padding-top: 70px;
  background-color: $GREY_BG;
}
</style>

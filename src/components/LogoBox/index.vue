<template>
    <div class="logo-area">
        <img class="logo" src="/logo.svg">
        <div class="name-tag">
            <p class="bold-24 first-letter text-dark-purple">
                findmena
            </p>
        </div>
    </div>
</template>

<script>
import {store} from "@/store/store.js";

export default {
    name: "LogoBox",
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-area {
  display: flex;
    cursor: pointer;

  .tag-line {
    transform: translateY(-3px);
  }

  .company-name {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 36px;
    margin-right: 6px;
  }

  .underline {
    text-decoration: underline;
    text-decoration-color: $PURPLE;
    text-decoration-thickness: 3px;
    text-underline-offset: 4px;

  }

  .name-tag {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: $BREAKING_POINT) {
  .name-tag {
    display: none;
  }
}
</style>
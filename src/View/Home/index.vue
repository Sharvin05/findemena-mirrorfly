<template>
  <div class="wrapper" ref="scrollDiv" >
      <router-link to="/chat/64d0ea9a6708bd561776acbe">
          <v-btn color="red">
SINGH
          </v-btn>
      </router-link>
      <router-link to="/chat/64db5b9a711fff15a45211eb">
          <v-btn color="red">
      LOKESH
          </v-btn>
      </router-link>
  </div>
</template>

<script>

export default {
    name:"Home"
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  gap:32px;
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>

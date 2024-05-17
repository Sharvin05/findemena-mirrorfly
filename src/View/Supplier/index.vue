<template>
  <div class="wrapper" >
     <div class="container "  >
     page 1
     </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.wrapper{
  background-color: $GREY_BG;
  min-height: calc(100vh - 70px);
}
.container{
  display: flex;
  padding-top: 1vh;
  padding-bottom: 30px;
  justify-content: start;
  align-items: center;
  flex-flow: column;

}

</style>

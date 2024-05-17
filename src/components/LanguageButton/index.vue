<template>
  <div class="language-button cursor-pointer" @click="handleLanguage">
      <div class="language-item" v-for="(item,index) in languages"  :class="{active:currentLanguage===item?.identification}" >
          <p class="medium-16 " :class="[active===item?.identification ? 'text-dark-purple' : 'text-white' ]" >{{item?.shortName}}</p>
      </div>
  </div>
</template>

<script>
import { store } from "@/store/store.js";
import {ROUTES} from "@/constants/routes.js";

export default {
  data() {
    return {
      languages: store.languageList,
      active: store.getLocalLanguage(),
    };
  },
    computed:{
      currentLanguage() {
          return store.currentLanguage
      }
    },
    watch:{
        currentLanguage(newVal,oldVal){
            this.active=newVal
        }
    },
    methods:{
        handleLanguage(){
            const language =  store.getLocalLanguage()
            // console.log( store.getLocalLanguage())
            if(language==='en_US'){
                this.$i18n.locale = this.languages[1].identification;
                store.setLocalLanguage(this.languages[1].identification);
            }else{
                this.$i18n.locale = this.languages[0].identification;
                store.setLocalLanguage(this.languages[0].identification);
            }
            window.location.reload()

        }
    }
};
</script>

<style lang="scss" scoped>
.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $PURPLE;
  height: 40px;
  padding: 0px 5px;
  border-radius: 20px;
}
.language-item{
  width: 52.5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 34px;
}
.active{
  background-color: $SECONDARY;
}
</style>

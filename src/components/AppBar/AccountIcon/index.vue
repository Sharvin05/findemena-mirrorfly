<template>
<div id="account-menu"   class="account-icon">
    <div class="icon-holder" >
        <img  src="../logo.svg">
    </div>
    <div  class="hidden-menu" v-if="menu"  >
        <div class="menu-items" v-for="(item,index) in list"  >
<!--            <p class="text-black medium-216" @click="handleSelect(item?.action,item?.type)" >{{item.label}}</p>-->
        </div>
    </div>
</div>
</template>

<script>
import {ROUTES} from "@/constants/routes.js";

export default {
    name:"AccountIcon",
    data(){
        return{
            modal:false,
            list:[
                {
                    label:this.$t('settings'),
                    action:ROUTES.SETTINGS,
                    type:0
                },
                {
                    label:this.$t('signout'),
                    action:1,
                    type:1
                }
            ],
            menu:false,
            userInfo:null,
        }
    },
    mounted() {
        window.addEventListener("click", (e) => {
            if (document.getElementById("account-menu")?.contains(e.target)) {
            } else {
                this.menu = this.menu ? false : this.menu;
            }
        });
    },
    beforeUnmount() {
        // window.removeEventListener()
        window.removeEventListener("click", (e) => {
            if (document.getElementById("account-menu")?.contains(e.target)) {
            } else {
                this.menu = this.menu ? false : this.menu;
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.account-icon{
    position: relative;
}
.icon-holder{
  max-width: 40px;
  max-height:  40px;
    overflow: hidden;
    border-radius: 50%;
    img{
        width: 60px;
    }

}
.hidden-menu{
    background-color: $SECONDARY;
    padding: 9px 0px;
    right: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    top: 40px;
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 8px;
    .menu-items{
        min-height: 24px;
        padding: 5px 10px;
        display: flex;
        width: 90px;
    }
    .menu-items:hover{
        cursor: pointer;
        background-color: #f1f1f1;
    }
}
</style>
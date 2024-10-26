<template>
    <div class="wrapper">
        <div class="container" >
            <div class="left flex-box">
               <LogoBox @click="handleRoute(navList[0].action)" />
            </div>

            <div class="right flex-box">
<!--                <LanguageButton />-->
                <NavItem  v-for="(item,index) in navList" :data="item" @click="handleRoute(item.action)" />
<!--                <AccountIcon/>-->
            </div>
        </div>
    </div>
</template>

<script>
import {ROUTES} from "@/constants/routes.js";
import NavItem from "@/components/AppBar/NavItem/index.vue";
import home from '@/assets/icons/appbar/home.svg'
import chat from '@/assets/icons/appbar/chat.svg'
import activity from '@/assets/icons/appbar/activity.svg'
import notification from '@/assets/icons/appbar/notification.svg'
import planner from '@/assets/icons/appbar/planner.svg'
import bidding from '@/assets/icons/appbar/bidding.svg'
import LanguageButton from "@/components/LanguageButton/index.vue";
import AccountIcon from "@/components/AppBar/AccountIcon/index.vue";
import {store} from "@/store/store.js";
import LogoBox from "@/components/LogoBox/index.vue";
export default {
    name:"AppBar",
    components: {LogoBox, AccountIcon, LanguageButton, NavItem},
    data(){
        return{
            companyName:store.logoName,
            companyNewName:{
                1:store.logoName1,
                2:store.logoName2,
                3:store.logoName3,
            },
            navList:[
                {
                    icon:home,
                    label:this.$t('home'),
                    action:'/home' // string is temp , before mount the proper value is assigned
                },
                {
                    icon:chat,
                    label:this.$t('chat'),
                    action:ROUTES.CHAT
                },
                {
                    icon:activity,
                    label:this.$t('activity'),
                    action:ROUTES.ACTIVITY,
                },
            ],
            biddingRoute:ROUTES.BIDDING
        }
    },
    methods:{
        handleRoute(data){
            this.$router.push(data)
        },
        addElement(newObject){
            const lastIndex = this.navList.length - 1;

// Insert the new object before the last object
            this.navList.splice(lastIndex, 0, newObject);

        }
    },

}
</script>

<style lang="scss" scoped>
.wrapper{
    position: fixed;
    z-index: 4;
    //left: 0px;
    background: $SECONDARY;
    top:0px;
    width: 100%;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.flex-box{
    display: flex;
    align-items: center;
}

.bid-timer{
    display: flex;
    align-items: center;
    gap:4px;
    min-width: 300px;
}
.right{
    justify-content: space-between;
    gap:24px;
    height: 100%;
}
</style>
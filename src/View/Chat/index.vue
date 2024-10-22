<template>
    <div class="wrapper">
        <div class="chat-wrapper">
            <Basic  :route="currentRoute"
                    :changeUnreadCount="handleUnreadCount" />
        </div>
    </div>

</template>

<script>
import MirrorFlyUIReactComponent from '@/plugins/MirrorFly/index.jsx'
import {applyReactInVue} from 'veaury'
export default {
    name:"Chat",
    components: {
        Basic: applyReactInVue(MirrorFlyUIReactComponent),
    },
    data(){
        return{

        }
    },
    computed:{
        currentRoute(){
            return this.$route
        },
    },
    methods:{
        handleUnreadCount(data){
            this.emitter.emit("unReadCount",data)
            const width =   document.getElementById("mf-root-Parent")?.parentElement?.getBoundingClientRect()?.width
            console.log("mf-root width",width)
        },
    },
    beforeMount() {
      const width =   document.getElementById("mf-root-Parent")?.parentElement?.getBoundingClientRect()?.width
        console.log("mf-root width",width)
    },
    mounted() {
        const width =   document.getElementById("mf-root-Parent")?.parentElement?.getBoundingClientRect()?.width
        console.log("mf-root width",width)
        // Accessing the parent element's offsetWidth when the component is mounted
        this.$nextTick(() => {
            const element = this.$el; // Refers to the root element of the component
            const parentWidth = element.parentElement.offsetWidth;
            console.log('Parent Width:', parentWidth);
        });
    }
}
</script>
<!--<style scoped>-->
<!--[__use_react_component_wrap] {-->
<!--    display: flex !important; /* Ensures your styles take precedence */-->
<!--    height: calc(100vh - 130px)!important;-->
<!--}-->
<!--</style>-->
<style lang="scss">

body .mirrorfly-root .boxLayout {
    --parent-gap: 65px;
}

@media screen and (max-width : 1440px) {
    body .mirrorfly-root .boxLayout{
        --parent-gap : 65px;
    }
}


.mirrorfly-root .boxLayout{
    background: none !important;
    padding: 0px !important;
}



.mirrorfly-root .mf-section .start-chart p {
    display: none;
}
.mirrorfly-root .mf-section .start-chart .start-chat {
    display: none;
}
.mirrorfly-root .container .chat-conversion .chatconversation-container{
    background-repeat: repeat;
}
.mirrorfly-root .container .chat-conversion .chatconversation-container footer .message-area-container .message-area .typing-area{
    //height: 40px;
}
.mirrorfly-root .message-text{
    font-size: 12.9px !important;
    letter-spacing: 0.6px !important;
    font-weight: 500 !important;
    line-height: 18px !important;
}

.mirrorfly-root .boxLayout .containerLayout {
    max-width: 100% !important;
    max-height: 100% !important;
    min-height: 100% !important;
}
.recent-chatlist, .chat-conversion {
    max-height: 100% !important;
    min-height: 100% !important;
}
.chat-list{
    height: 100% !important;
    display: flex;
    flex-flow: column;
}
.mirrorfly-root ,.boxLayout , .containerLayout{
    height: 100% !important;
}
// reply - message
.mirrorfly-root .container .chat-conversion .chatconversation-container .msg-content .reply-block.receiver .reply-container{
    background: rgba(102,55,191,1);
}
.mirrorfly-root .container .chat-conversion .chatconversation-container .msg-content .reply-block .reply-container{
    background: $MEDIUM_GREY;
}
.mirrorfly-root .container .chat-conversion .chatconversation-container .msg-content .sender-row .sender {
    border-radius: 12px 12px 12px 0px;
    padding: 8px;
}
.chatconversation-container .msg-content .receiver-row .receiver{
    border-radius: 12px 12px 0px 12px;
    padding: 8px;
}
</style>

<style lang="scss" scoped>
.wrapper{
    background-color: $GREY;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
}
.chat-wrapper{
    height: calc(100vh - 130px);
    width: 100% ;
}

</style>
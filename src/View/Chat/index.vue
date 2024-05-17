<template>
    <div class="wrapper">
        <div class="chat-wrapper">
            <Basic/>
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
    }
}
</script>
<style lang="scss">
.mirrorfly-root .boxLayout{
    background: none !important;
    padding: 0px !important;
}
.mirrorfly-root{
    //height: calc(100vh - 130px);
    //max-height: 100%;
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
       height: 100px;
    }

</style>

<style lang="scss" scoped>
.wrapper{
    background-color: $GREY_BG;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
}
.chat-wrapper{
    width: 80% ;
}


</style>
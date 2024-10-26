import { ChatApp } from "mirrorfly-uikit/dist"
import "mirrorfly-uikit/dist/assets/scss/bundle.css"
import React from "react"
import Vue from '@vue/compat'
import {store} from "@/store/store.js";
import {useRoute} from "vue-router";
import { SDK } from "mirrorfly-uikit/dist"
Vue.use(React)
function MirrorFlyUIReactComponent({route,changeUnreadCount}) {

    const user = store.getUser()


    // const route = useRoute();
    // console.log("route.path",route.path)
    console.log("route.path",route)


    const config = {
        groupChatEnabled: false,
        logoutEnabled: false,
        profileEditable: false,
        newChatEnabled: false,
        browserTitle: "Chat | Findmena",
        darkThemeEnabled: false,
        addParticipantCallEnabled:false,
        forwardChatEnabled:false,


    };
    const customColorSet={
        mfThemeColor:"#6637bb",
        mfThemeColorRgb:"211,194,241",
        // mfBgcStartchatBannerLink:" #6637bb",
        mfChatBubbleSenderBg:"#5521b4",
        mfChatBubbleSenderText: "#f5f5f5",
        mfChatBadgeBg:"#ffffff",
        mfChatBubbleReceiverText:"#fff",
        mfChatBubbleReceiverBg:"#7c8188",
        mfChatBadgeText:"#1E1F4B",
        mfThemeColorHighlight:"rgba(211, 194, 241, 0.2)",
        //font info
        mfRegular: "SFUIDisplayRegular, sans-serif",
        mfLight: "SFUIDisplayLight, sans-serif",
        mfMedium: "SFUIDisplayMedium, sans-serif",
        mfBold: "SFUIDisplayBold, sans-serif",
        mfBlack: "SFUIDisplayBlack, sans-serif",
        mfSemibold: "SFUIDisplaySemibold, sans-serif",
        mfThin: "SFUIDisplayThin, sans-serif",
        mfHeavy: "SFUIDisplayHeavy, sans-serif",
        mfUltralight: "SFUIDisplayUltralight, sans-serif",
        mfRegularNova: "ProximaNova-Regular, sans-serif",
        mfLightNova: " ProximaNova-Light, sans-serif",
        mfSemiboldNova: "ProximaNova-Semibold, sans-serif",
    }

    const iconSetObject={
        mf_Attachment:<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.7625 21.9653 4.71225 19.9151C2.662 17.8648 2.662 14.5407 4.71225 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0444 4.84167 20.0444 7.05775 18.6776 8.42458L10.0156 17.0866C9.33213 17.7701 8.22409 17.7701 7.54068 17.0866C6.85726 16.4032 6.85726 15.2952 7.54068 14.6118L15.1421 7.01037" stroke="#5521b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        mf_AttachmentCamera: "",
        mf_AttachmentDoc: "",
        mf_AttachmentImageVideo: "",
        mf_AttachMusic: "",
        mf_AudioCall: "",
        mf_VideoCall: "",
    }

    const customConversation = {
        userId:route?.params?.id,
        conversationValue:false, // without sidebar
        sidebarchat:false
    }
    console.log("route?.params?.id userId",route?.params?.id,customConversation)

    function getCounts(counts){
        changeUnreadCount(counts)
        console.log("un read message counts from mirrorfly call back",counts)
    }


//iconSet={iconSetObject}


    return (

        <ChatApp
            width="100%"
            licenseKey="PByC6Ln9dBX6vxZoZ6aHP1zJCDDhzF"
            callback={getCounts}
            userIdentifier={user?._id}
            customConversation={customConversation}
            mirrorflyConfig={config}
            colorSet={customColorSet}
            iconSet={iconSetObject}

        />

    );
}
export default MirrorFlyUIReactComponent;
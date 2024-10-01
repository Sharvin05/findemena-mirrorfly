import { ChatApp } from "mirrorfly-uikit/dist"
import "mirrorfly-uikit/dist/assets/scss/bundle.css"
import React from "react"
import Vue from '@vue/compat'
import {store} from "@/store/store.js";

Vue.use(React)
function MirrorFlyUIReactComponent() {

    const user = store.getUser()

    const config = {
        groupChatEnabled: false,
        logoutEnabled: false,
        profileEditable: false,
        newChatEnabled: false,
        browserTitle: "Chat | Findmena",

    };

    const customColorSet={
        mfThemeColor:" #6637bb",
        mfChatBubbleSenderBg:" #5521b4",
        mfChatBubbleSenderText: " #f5f5f5",
        mfChatBadgeBg:" #ffffff",
        mfChatBubbleReceiverText:"#1E1F4B",
        mfChatBadgeText:"#1E1F4B"
    }

    const customConversation = {
        // userId:route?.params?.id,
        sidebarchat:false
    }

    return (
        <>
            <ChatApp
                width="100%"
                licenseKey="PByC6Ln9dBX6vxZoZ6aHP1zJCDDhzF"
                userIdentifier={user?._id}
                customConversation={customConversation}
                mirrorflyConfig={config}
                colorSet={customColorSet}
            />
        </>
    );
}
export default MirrorFlyUIReactComponent;
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { id } = useParams();
    const meetingContainerRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            // Generate Kit Token
            const appID = 894773067;
            const serverSecret = "9197dd6929543e826deb1c6faef5efdc";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "CodingMaster");

            // Create instance object from Kit Token
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            // Start the call and attach it to the specific container
            zp.joinRoom({
                container: meetingContainerRef.current,  // Use ref to target a specific div
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: `http://localhost:3000/room/${id}`
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,  // 1-on-1 call mode
                },
            });
        };

        myMeeting();
    }, [id]);

    return (
        <div>
            <div ref={meetingContainerRef} className="myCallContainer" style={{ width: '100vw', height: '100vh' }}></div>
        </div>
    );
};

export default Room;

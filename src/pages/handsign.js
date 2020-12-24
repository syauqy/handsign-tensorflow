//1. install depedencies - D
//2. import dependencies - D
//3. setup webcam and canvas - D
//4. define references to those - D
//5. load handpose - D
//6. detect function
//7. drawing utilites from tensorflow
//8. draw functions
//9. Install fingerpose

import React, {useRef, useState, useCallback, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';

import Emojis from '../gestures'; 

import Emojimage from '../emojimage';


import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("off");

    const [emoji, setEmoji] = useState(null);


    async function runHandpose() {
        setCamState('on');
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 100);
    };

    async function detect(net) {

        // Check data is available
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);
            // console.log(hand);

            // console.log(Emojis);

            if (hand.length > 0) {
                // add "✌🏻" and "👍" as sample gestures
                const GE = new fp.GestureEstimator([fp.Gestures.VictoryGesture,
                  fp.Gestures.ThumbsUpGesture, 
                  Emojis.loveGesture, Emojis.vulcanGesture, Emojis.fingerCrossedGesture, Emojis.loveYouGesture, Emojis.hornsGesture,
                Emojis.okayGesture]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                console.log(estimatedGestures);

                  document.querySelector('.pose-data').innerHTML = JSON.stringify(estimatedGestures.poseData, null, 2);

                
                if(estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0){
                  const confidence = estimatedGestures.gestures.map(
                    (p) => p.confidence
                  );
                  const maxConfidence = confidence.indexOf(
                    Math.max.apply(undefined, confidence)
                  );
                  setEmoji(estimatedGestures.gestures[maxConfidence].name);
                  console.log(emoji);
                }
                
            }

            

            // Draw mesh
            const ctx = canvasRef
                .current
                .getContext("2d");
            drawHand(hand, ctx);
        }
    };

    // useEffect(()=>{runHandpose()},[]);

    function turnOffCamera() {
        setCamState('off');
    }

    return (
        <div>
            {camState === 'on'
                ? <Webcam
                        ref={webcamRef}
                        style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480
                    }}/>
                : <div>
                    No cam
                </div>}

            <canvas
                ref={canvasRef}
                style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480
            }}/>

{emoji !== null || 'undefined' ? (
          <img
            src={Emojimage[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          " "
        )}
        <pre className="pose-data"></pre>

            <button onClick={turnOffCamera}>matiin kamera</button>
            <button onClick={runHandpose}>run handpose</button>

        </div>
    )
}

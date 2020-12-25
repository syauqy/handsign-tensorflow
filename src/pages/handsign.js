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

import {Emojimage, Emojipass} from '../emojimage';

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("on");
    const [gameState, setGameState] = useState(null);

    const [emoji,
        setEmoji] = useState(null);


    async function runHandpose() {
        // setCamState('on');
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        _emojiList();
        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 100);
    };

    let currentEmoji = 0;

    function generateEmojis() {
        const password = shuffle(Emojipass);
        const passwordContainer = document.getElementById('emojis');

        passwordContainer.innerHTML = '';

        password.forEach(obj => {
            const img = document.createElement('img');
            img.src = obj.src;
            img.alt = obj.alt;

            passwordContainer.appendChild(img);
        });

        return password;
    }

    let emojiList;

    function _emojiList() {
        emojiList = generateEmojis();
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

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

            if (hand.length > 0) {
                // add "✌🏻" and "👍" as sample gestures
                const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                    Emojis.loveGesture,
                    Emojis.vulcanGesture,
                    Emojis.fingerCrossedGesture,
                    Emojis.loveYouGesture,
                    Emojis.hornsGesture,
                    Emojis.okayGesture
                ]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                console.log(estimatedGestures);

                document
                    .querySelector('.pose-data')
                    .innerHTML = JSON.stringify(estimatedGestures.poseData, null, 2);

                if (currentEmoji === emojiList.length) {
                    document
                        .querySelector('.pose-data')
                        .innerText = "Berhasil!!";
                    return;
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));

                    console.log('gestures', estimatedGestures.gestures);
                    console.log('emoji', emojiList[currentEmoji].alt);
                    // const match = estimatedGestures.find(g => emojiList[currentEmoji].alt === g.gestures.name);
                    if(emojiList[currentEmoji].alt === estimatedGestures.gestures[maxConfidence].name){
                              document.querySelector(`[alt=${estimatedGestures.gestures[maxConfidence].name}]`).classList.add('found');
                              currentEmoji++;
                            }
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
      if(camState === "on"){
        setCamState('off');
      }else{
        setCamState('on');
      }
        
    }

    return (
        <div>
            <div className="responsive-embed">
            
            <div id="webcam-container">
            {camState === 'on'
                ? <Webcam
                        ref={webcamRef}
                        style={{
                        position: "relative",
                        // marginLeft: "auto",
                        // marginRight: "auto",
                        // left: 0,
                        // right: 0,
                        textAlign: "center",
                        // zindex: 9,
                        width: '480px',
                        height: '800px'
                    }}>
                      
                    </Webcam>
                : <div>
                    No cam
                </div>}

                <div id="emojis">emojis</div>

                <canvas
                ref={canvasRef}
                style={{
                position: "absolute",
                margin: "auto",
                top: 0,
                bottom: 0,
                // marginLeft: "auto",
                // marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: '480px',
                height: '400px'
            }}/>

             {emoji !== null || 'undefined'
                ? (<img
                    src={Emojimage[emoji]}
                    style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 400,
                    bottom: 500,
                    right: 0,
                    textAlign: "center",
                    height: 50
                }}/>)
                : (" ")}
            </div>
            </div>
            
            
            <pre className="pose-data"></pre>
            <button id="generateEmoji" onClick={_emojiList}>Generate emojis</button>
            <button onClick={turnOffCamera}>matiin kamera</button>
            <button onClick={runHandpose}>run handpose</button>

        </div>
    )
}

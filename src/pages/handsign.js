import React, {useRef, useState, useCallback, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';

import Emojis from '../gestures';

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    IconButton
} from '@chakra-ui/react'

import {Emojimage, Emojipass} from '../emojimage';

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("on");

    const [emoji,
        setEmoji] = useState(null);

    let emojiList;
    let currentEmoji = 0;
    let points = 0;
    let gamestate = 'started';

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

    function restartGame() {
        _emojiList();
        clearData();
        gamestate = 'started';
    }

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

    function clearData() {
        currentEmoji = 0;
        points = 0;

        document
            .querySelector('#emojis')
            .innerText = "";

        document
            .getElementById('points')
            .innerHTML = points;
        console.log('data cleared', currentEmoji, points);

        document
            .querySelector('#singmoji')
            .innerText = "love emoji untuk mulai";

        document
            .getElementById('emojimage')
            .removeAttribute('src')
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
                // console.log(estimatedGestures);

                document
                    .querySelector('.pose-data')
                    .innerHTML = JSON.stringify(estimatedGestures.poseData, null, 2);
                if (gamestate === 'started') {
                    document
                        .querySelector('#singmoji')
                        .innerText = "love emoji untuk mulai";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));

                    //setting up game state, looking for love emoji
                    if (estimatedGestures.gestures[maxConfidence].name === 'love' && gamestate !== 'played') {
                        console.log('masuk esitamed gesture', estimatedGestures.gestures[maxConfidence].name);
                        gamestate = 'played';
                        console.log('game_state', gamestate);
                        console.log('currentEmoji', currentEmoji, 'emojilist.length', emojiList.length);
                    } else if (gamestate === 'played') {
                        //berhasil selesai semua
                        if (currentEmoji === emojiList.length) {
                            //animasi berhasil ganti tulisan emoji
                            document
                                .querySelector('#emojis')
                                .innerText = "Berhasil!!";
                            //munculin tombol ulangi balikin game state gamestate = 'finish';
                            gamestate = 'finished';
                            currentEmoji = 0;
                            points = 0;
                            return;
                        }
                        
                        //game play state
                        document
                            .getElementById('emojimage')
                            .setAttribute('src', emojiList[currentEmoji].src);

                        console.log('points', points);
                        // const match = estimatedGestures.find(g => emojiList[currentEmoji].alt ===
                        // g.gestures.name);
                        if (emojiList[currentEmoji].alt === estimatedGestures.gestures[maxConfidence].name) {
                            // ganti emoji document
                            // .querySelector(`[alt=${estimatedGestures.gestures[maxConfidence].name}]`)
                            // .classList     .add('found');
                            currentEmoji++;
                            //nambah point
                            points += 10;
                            document
                                .getElementById('points')
                                .innerHTML = points;
                            //animasi nambah point (framer asoys) bunyi cengkring nambah point
                        }
                        setEmoji(estimatedGestures.gestures[maxConfidence].name);
                        // console.log(emoji);
                    } else if(gamestate ===  'finished'){
                        return;
                    }
                    // else if(gamestate === 'finished'){
                    //     return;
                    // }
                    // setGameState(gamestate); console.log('status game', gameState);
                }

            }

            // Draw mesh
            const ctx = canvasRef
                .current
                .getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(() => {
        runHandpose()
    }, []);

    function turnOffCamera() {
        if (camState === "on") {
            setCamState('off');
        } else {
            setCamState('on');
        }

    }

    return (
        <div>
            <div className="responsive-embed">

                <div id="webcam-container">
                    {camState === 'on'
                        ? <Webcam id="webcam" ref={webcamRef}/>
                        : <div id="webcam" background="black"></div>}

                    <div id="emojis">
                        {/* <Heading as="h3" size="lg" className="title"></Heading> */}
                    </div>

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
                <canvas id="gesture-canvas" ref={canvasRef} style={{}}/>

                <Heading
                    as="h2"
                    size="3xl"
                    color="white"
                    isTruncated
                    textAlign="center"
                    style={{
                    position: 'fixed',
                    bottom: '50px',
                    right: '10px'
                }}
                    id="points">
                    {points}
                </Heading>
            </div>

            <div
                id="singmoji"
                style={{
                zIndex: 9,
                position: 'fixed',
                top: '50px',
                right: '30px'
            }}></div>

            <Image
                boxSize="80px"
                objectFit="cover"
                id='emojimage'
                style={{
                zIndex: 9,
                position: 'fixed',
                top: '60px',
                right: '60px'
            }}/>
            <pre className="pose-data" color="white" style={{position: 'fixed', top: '50px', left: '10px'}} >Pose data</pre>
            <Stack id="start-button" spacing={4} direction="row" align="center">
                <Button colorScheme="blue" onClick={restartGame}>START</Button>
            <Button onClick={turnOffCamera} colorScheme="red">matiin kamera</Button>
            {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
            </Stack>
            
            <button id="generateEmoji" onClick={_emojiList}>Generate emojis</button>
            {/* <button id="start-button" onClick={runHandpose}>run handpose</button> */}

        </div>
    )
}

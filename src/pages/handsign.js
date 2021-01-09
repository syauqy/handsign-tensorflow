import React, {useRef, useState, useCallback, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';
import { Helmet } from "react-helmet"

import Emojis from '../gestures';

import Handsigns from '../handsigns';

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    Container,
    Box,
    VStack,

    ChakraProvider
} from '@chakra-ui/react'

import {Emojimage, Emojipass} from '../emojimage';
import {Signimage, Signpass} from '../handimage';

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("on");
    // const [dataState,
    //     setDataState] = useState('off');

    const [sign, setSign] = useState(null);

    const [emoji,
        setEmoji] = useState(null);

    let signList;
    let currentSign = 0;

    let emojiList;
    let currentEmoji = 0;
    let points = 0;
    let gamestate = 'started';

    async function runHandpose() {
        // setCamState('on');
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        // _emojiList();
        _signList();
        // onOpen();  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 100);
    };


    function _signList(){
        signList = generateSigns();
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

    function generateSigns(){
        const password = shuffle(Signpass);
        return password;
    }

    function generateEmojis() {
        const password = shuffle(Emojipass);
        // const passwordContainer = document.getElementById('emojis');

        // passwordContainer.innerHTML = '';

        // password.forEach(obj => {
        //     const img = document.createElement('img');
        //     img.src = obj.src;
        //     img.alt = obj.alt;

        //     passwordContainer.appendChild(img);
        // });

        return password;
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
            // console.log('aman', signList);

            if (hand.length > 0) {
                // add "✌🏻" and "👍" as sample gestures
                // const GE = new fp.GestureEstimator([
                //     fp.Gestures.VictoryGesture,
                //     fp.Gestures.ThumbsUpGesture,
                //     Emojis.loveGesture,
                //     Emojis.vulcanGesture,
                //     Emojis.fingerCrossedGesture,
                //     Emojis.loveYouGesture,
                //     Emojis.hornsGesture,
                //     Emojis.okayGesture,
                //     Emojis.hushGesture,
                //     Emojis.pinchGesture,
                //     Emojis.prayGesture,
                //     Emojis.thinkingGesture,
                //     Emojis.gunGesture,
                //     Emojis.fistGesture,
                //     Emojis.callMeGesture,
                //     Emojis.backhandRightGesture,
                //     Emojis.backhandLeftGesture
                // ]);

                const GE = new fp.GestureEstimator([
                    fp.Gestures.ThumbsUpGesture,
                    Handsigns.aSign, Handsigns.bSign, Handsigns.cSign, Handsigns.dSign, Handsigns.eSign, Handsigns.fSign, Handsigns.gSign,
                    Handsigns.hSign, Handsigns.iSign, Handsigns.jSign, Handsigns.kSign, Handsigns.lSign, Handsigns.mSign, Handsigns.nSign,
                    Handsigns.oSign, Handsigns.pSign, Handsigns.qSign, Handsigns.rSign, Handsigns.sSign, Handsigns.tSign, Handsigns.uSign,
                    Handsigns.vSign, Handsigns.wSign, Handsigns.xSign, Handsigns.ySign, Handsigns.zSign
                ]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                console.log(estimatedGestures); 
                document.querySelector('.pose-data') .innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

                // if (dataState === "on") {}

                if (gamestate === 'started') {
                    document
                        .querySelector('#app-title')
                        .innerText = "Make a 👍 gesture with your hand to start";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));

                    //setting up game state, looking for love emoji
                    if (estimatedGestures.gestures[maxConfidence].name === 'thumbs_up' && gamestate !== 'played') {
                        // _emojiList();
                        _signList();
                        gamestate = 'played';
                        // console.log('game_state', gamestate); console.log('currentEmoji',
                        // currentEmoji, 'emojilist.length', emojiList.length); runCountdown();
                        document
                            .getElementById('emojimage')
                            .classList
                            .add('play');
                            document
                            .querySelector('.tutor-text')
                            .innerText = "make a hand gesture based on letter shown below";
                    } else if (gamestate === 'played') {
                        document
                            .querySelector('#app-title')
                            .innerText = "";
                        //berhasil selesai semua
                        if (currentSign === signList.length) {
                            //animasi berhasil ganti tulisan emoji
                            // _emojiList();
                            _signList();
                            currentSign = 0;
                            // currentEmoji = 0;
                            // points = 0;
                            return;
                        }

                        //game play state
                        document
                            .getElementById('emojimage')
                            .setAttribute('src', signList[currentSign].src);

                        // console.log('points', points);
                        // const match = estimatedGestures.find(g => emojiList[currentEmoji].alt ===
                        // g.gestures.name);
                        // if (emojiList[currentEmoji].alt === estimatedGestures.gestures[maxConfidence].name) {
                        //     // ganti emoji document
                        //     // .querySelector(`[alt=${estimatedGestures.gestures[maxConfidence].name}]`)
                        //     // .classList     .add('found');
                        //     currentEmoji++;
                        //     currentSign++;
                        //     //nambah point
                        //     // points += 10;
                        //     // emojiEffect();
                            
                        //     // document
                        //     //     .getElementById('points')
                        //     //     .innerHTML = points;
                        //     //animasi nambah point (framer asoys) bunyi cengkring nambah point
                        // }
                        if (signList[currentSign].alt === estimatedGestures.gestures[maxConfidence].name) {
                            // ganti emoji document
                            // .querySelector(`[alt=${estimatedGestures.gestures[maxConfidence].name}]`)
                            // .classList     .add('found');
                            currentEmoji++;
                            currentSign++;
                            //nambah point
                            // points += 10;
                            // emojiEffect();
                            
                            // document
                            //     .getElementById('points')
                            //     .innerHTML = points;
                            //animasi nambah point (framer asoys) bunyi cengkring nambah point
                        }
                        // setEmoji(estimatedGestures.gestures[maxConfidence].name);
                        setSign(estimatedGestures.gestures[maxConfidence].name);
                        
                        // console.log(emoji);
                    } else if (gamestate === 'finished') {
                        
                        return;
                    }
                }

            }
            // emojiEffect();
            // Draw mesh 
            const ctx = canvasRef.current.getContext("2d");
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
        <ChakraProvider>
            <Helmet>
          <meta charSet="utf-8" />
          <title>Handsign | Learn ASL using AI camera</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="center">
                    <Box h="20px"></Box>
                    <Heading as="h3" size="md" className="tutor-text" color="white" textAlign="center"></Heading>
                    <Box h="20px"></Box>
                </VStack>

                <Heading as="h1" size="lg" id="app-title" color="white" textAlign="center">🧙‍♀️ Loading the Magic 🧙‍♂️</Heading>
                

                {/* <div className="responsive-embed">
            </div> */}

                <div id="webcam-container">
                    {camState === 'on'
                        ? <Webcam id="webcam" ref={webcamRef}/>
                        : <div id="webcam" background="black"></div>}

                    {/* <div id="emojis"> */}
                        
                    {/* </div> */}

                    {sign !== null || 'undefined'
                        ? (<div style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            right: "calc(50% - 50px)",
                            bottom: 20,
                            textAlign: "-webkit-center",}}>
                            <Text color="white" fontSize="sm" mb={1}>detected gestures</Text>
                        <img
                            src={Signimage[sign]}
                            style={{
                            height: 50
                        }}/>
                        </div>
                        )
                        : (" ")}
                </div>

                <canvas id="gesture-canvas" ref={canvasRef} style={{}}/>

                <div
                    id="singmoji"
                    style={{
                    zIndex: 9,
                    position: 'fixed',
                    top: '50px',
                    right: '30px'
                }}></div>

                <Image h="80px" objectFit="cover" id='emojimage'/> 
<pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre>

            </Container>

            <Stack id="start-button" spacing={4} direction="row" align="center">
                {/* <Button colorScheme="blue" onClick={restartGame}>data</Button> */}
                {/* <Button colorScheme="blue" onClick={restartGame}>START</Button> */}
                <Button onClick={turnOffCamera} colorScheme="blue">matiin kamera</Button>
                {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
            </Stack>
            

        </ChakraProvider>
    )
}



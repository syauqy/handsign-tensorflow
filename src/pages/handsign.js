import React, {useRef, useState, useCallback, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';
import { Helmet } from "react-helmet"

import {Engine, Render, Runner, World, Bodies} from 'matter-js'

import Emojis from '../gestures';

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    IconButton,
    Container,
    Box,
    Center,
    VStack,

    //modal
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

    ChakraProvider
} from '@chakra-ui/react'

import {Emojimage, Emojipass} from '../emojimage';

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("on");
    const [dataState,
        setDataState] = useState('off');

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
        // onOpen();  Loop and detect hands
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

        // document     .querySelector('#singmoji')     .innerText = "love emoji untuk
        // mulai";

        document
            .getElementById('emojimage')
            .removeAttribute('src')
    }

    // const deviceWidth = window.innerWidth;
    // const deviceHeight = window.innerHeight;

    // const world = document.querySelector(".boops");

    // const emojis = [
    //     'https://ik.imagekit.io/ps3xes4nrg/fingcrossed_emoji_avhUZ4KvEg0c.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/heart_emoji_8n0j1a9KqwN.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/horns_emoji_FpTUEO8IL.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/ok_emoji_hLw6a6BB-.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/thumbs_up_emoji_K0eZbiEtKb0.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/victory_emoji_EXqiolk0d8c.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/vulcan_emoji_GkdMsyHqdC.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/thinking_emoji_FUH1tBqEbBw.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/hush_emoji_V4Xkp1Zwr.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/fist_emoji_kvPDQvO2gr.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/pinch_emoji_xDRVg9Hz3JEn.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/gun_emoji_T-2sCCXbXe.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/pray_emoji_LLdMjWIegtu.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/backhand_right_emoji_0mGFeXPCH.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/call_me_emoji_OvAYOorfRdL.svg',
    //     'https://ik.imagekit.io/ps3xes4nrg/backhand_left_emoji_7bmFlF1CDLW.svg'
    // ];


    // // console.log('device width:', deviceWidth, 'device height:', deviceHeight);

    // function createBall() {
    //     const xDrop = Math.round(Math.random() * deviceWidth);
    //     const emojiUrl = emojis[Math.floor(Math.random() * emojis.length)];
    //     const ball = Bodies.circle(xDrop, -30, 23, {
    //         angle: Math.PI * (Math.random() * 2 - 1),
    //         friction: 0.001,
    //         frictionAir: 0.01,
    //         restitution: 0.8,
    //         render: {
    //             sprite: {
    //                 texture: `${emojiUrl}`
    //             }
    //         }
    //     });
    //     console.log(emojiUrl, 'x:', xDrop);
    //     setTimeout(() => {
    //         World.remove(engine.world, ball);
    //     }, 30000);

    //     return ball;
    // }

    // const engine = Engine.create();
    // const runner = Runner.create();
    // const render = Render.create({
    //     canvas: world,
    //     engine: engine,
    //     options: {
    //         width: deviceWidth,
    //         height: deviceHeight,
    //         background: "transparent",
    //         wireframes: false
    //     }
    // });

    // const boundaryOptions = {
    //     isStatic: true,
    //     render: {
    //         fillStyle: "transparent",
    //         strokeStyle: "transparent"
    //     }
    // };

    // const ground = Bodies.rectangle(deviceWidth / 2, deviceHeight, deviceWidth, 4, boundaryOptions);
    // const leftWall = Bodies.rectangle(0, deviceHeight / 2, 4, deviceHeight, boundaryOptions);
    // const rightWall = Bodies.rectangle(deviceWidth, deviceHeight / 2, 4, deviceHeight, boundaryOptions);

    // Render.run(render);
    // Runner.run(runner, engine);

    // World.add(engine.world, [ground, leftWall, rightWall]);

    // const boopClicked = () => {
    //     const ball2 = createBall();
    //     // console.log('booped');
    //     World.add(engine.world, [ball2]);
    // }

    // function emojiEffect() {
    //     for (var i = 1; i < 10; i++) {boopClicked();}
    // }

    // function emojiAnimation() {
    //     setInterval(() => {
    //         boopClicked();
    //         // _titlemoji = titleMoji[Math.floor(Math.random() * titleMoji.length)];
    //         // console.log(_titlemoji);
    //     }, 888);
        
    // }

    // emojiAnimation();

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
                    Emojis.okayGesture,
                    Emojis.hushGesture,
                    Emojis.pinchGesture,
                    Emojis.prayGesture,
                    Emojis.thinkingGesture,
                    Emojis.gunGesture,
                    Emojis.fistGesture,
                    Emojis.callMeGesture,
                    Emojis.backhandRightGesture,
                    Emojis.backhandLeftGesture
                ]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                console.log(estimatedGestures); 
                document.querySelector('.pose-data') .innerHTML =
                JSON.stringify(estimatedGestures.poseData, null, 2);

                if (dataState === "on") {}

                if (gamestate === 'started') {
                    document
                        .querySelector('#app-title')
                        .innerText = "Make a ❤️ love emoji with your hand to start";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));

                    //setting up game state, looking for love emoji
                    if (estimatedGestures.gestures[maxConfidence].name === 'love' && gamestate !== 'played') {
                        // console.log('masuk esitamed gesture',
                        // estimatedGestures.gestures[maxConfidence].name);
                        _emojiList();
                        gamestate = 'played';
                        // console.log('game_state', gamestate); console.log('currentEmoji',
                        // currentEmoji, 'emojilist.length', emojiList.length); runCountdown();
                        document
                            .getElementById('emojimage')
                            .classList
                            .add('play');
                    } else if (gamestate === 'played') {
                        document
                            .querySelector('#app-title')
                            .innerText = "";
                        //berhasil selesai semua
                        if (currentEmoji === emojiList.length) {
                            //animasi berhasil ganti tulisan emoji
                            document
                                .querySelector('#app-title')
                                .innerText = "You killed it!! 💪";
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
                            // emojiEffect();
                            
                            document
                                .getElementById('points')
                                .innerHTML = points;
                            //animasi nambah point (framer asoys) bunyi cengkring nambah point
                        }
                        setEmoji(estimatedGestures.gestures[maxConfidence].name);
                        
                        // console.log(emoji);
                    } else if (gamestate === 'finished') {
                        
                        return;
                    }
                    // else if(gamestate === 'finished'){     return; } setGameState(gamestate);
                    // console.log('status game', gameState);
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

    function showData() {
        if (dataState === "on") {
            setDataState('off');
        } else {
            setDataState('on');
        }
    }


    return (
        <ChakraProvider>
            <Helmet>
          <meta charSet="utf-8" />
          <title>Handmoji | Play</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="center">
                    <Box h="50px"></Box>
                    <Box h="auto"></Box>

                </VStack>

                <Heading as="h1" size="xl" id="app-title" color="white" textAlign="center">🧙‍♀️ Loading the Magic 🧙‍♂️</Heading>

                {/* <div className="responsive-embed">
            </div> */}

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
                {/* <canvas
                className="boops"
                style={{
                width: deviceWidth,
                height: deviceHeight
            }}></canvas> */}
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

                <div
                    id="singmoji"
                    style={{
                    zIndex: 9,
                    position: 'fixed',
                    top: '50px',
                    right: '30px'
                }}></div>

                <Image boxSize="80px" objectFit="cover" id='emojimage'/> 
<pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre>

            </Container>

            <Stack id="start-button" spacing={4} direction="row" align="center">
                <Button colorScheme="blue" onClick={restartGame}>data</Button>
                {/* <Button colorScheme="blue" onClick={restartGame}>START</Button> */}
                <Button onClick={turnOffCamera} colorScheme="blue">matiin kamera</Button>
                {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
            </Stack>
            

        </ChakraProvider>
    )
}



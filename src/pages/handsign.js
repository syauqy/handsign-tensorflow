import React, {useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';
import { Helmet } from "react-helmet"


import Handsigns from '../handsigns';
import handImages from '../images/handImages.svg';

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    Container,
    Box,
    VStack,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
useDisclosure,
Link,
    ChakraProvider
} from '@chakra-ui/react'

import {Signimage, Signpass} from '../handimage';

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

export default function Handsign() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [camState,
        setCamState] = useState("on");

    const [sign, setSign] = useState(null);


    let signList;
    let currentSign = 0;


    let gamestate = 'started';

    async function runHandpose() {
        const net = await handpose.load();
        _signList();

        setInterval(() => {
            detect(net);
        }, 100);
    };


    function _signList(){
        signList = generateSigns();
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

                const GE = new fp.GestureEstimator([
                    fp.Gestures.ThumbsUpGesture,
                    Handsigns.aSign, Handsigns.bSign, Handsigns.cSign, Handsigns.dSign, Handsigns.eSign, Handsigns.fSign, Handsigns.gSign,
                    Handsigns.hSign, Handsigns.iSign, Handsigns.jSign, Handsigns.kSign, Handsigns.lSign, Handsigns.mSign, Handsigns.nSign,
                    Handsigns.oSign, Handsigns.pSign, Handsigns.qSign, Handsigns.rSign, Handsigns.sSign, Handsigns.tSign, Handsigns.uSign,
                    Handsigns.vSign, Handsigns.wSign, Handsigns.xSign, Handsigns.ySign, Handsigns.zSign
                ]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                // console.log(estimatedGestures); 
                // document.querySelector('.pose-data') .innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);


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

                    //setting up game state, looking for thumb emoji
                    if (estimatedGestures.gestures[maxConfidence].name === 'thumbs_up' && gamestate !== 'played') {
                        _signList();
                        gamestate = 'played';
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
                            _signList();
                            currentSign = 0;
                            return;
                        }

                        //game play state
                        document
                            .getElementById('emojimage')
                            .setAttribute('src', signList[currentSign].src);
                        if (signList[currentSign].alt === estimatedGestures.gestures[maxConfidence].name) {
                            currentSign++;
                        }
                        setSign(estimatedGestures.gestures[maxConfidence].name);
                        
                    } else if (gamestate === 'finished') {
                        
                        return;
                    }
                }

            }
            // Draw mesh 
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(() => {
        runHandpose();
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
        </Helmet>
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="center">
                    <Box h="20px"></Box>
                    <Heading as="h3" size="md" className="tutor-text" color="white" textAlign="center"></Heading>
                    <Box h="20px"></Box>
                </VStack>

                <Heading as="h1" size="lg" id="app-title" color="white" textAlign="center">🧙‍♀️ Loading the Magic 🧙‍♂️</Heading>
                



                <div id="webcam-container">
                    {camState === 'on'
                        ? <Webcam id="webcam" ref={webcamRef}/>
                        : <div id="webcam" background="black"></div>}

                    {sign !== null || 'undefined'
                        ? (<div style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            right: "calc(50% - 50px)",
                            bottom: 80,
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

                <Image h="150px" objectFit="cover" id='emojimage'/> 
{/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

            </Container>

            <Stack id="start-button" spacing={4} direction="row" align="center">
                <Button onClick={turnOffCamera} colorScheme="orange">Camera</Button>
                <Button onClick={onOpen} colorScheme="orange">Learn More</Button>
            </Stack>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>American Sign Language (ASL)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">American Sign Language (ASL) is a visual language that serves as the predominant sign language of Deaf communities in the United States and most of Canada.<br></br>
          Here's the list of ASL hand gestures for alphabet.</Text>
          <Image src={handImages}/>
          <Text fontSize="sm">This sign language illustration is created by <Link href="https://thenounproject.com/pelodrome/" isExternal color="orange.300">Pelin Kahraman</Link></Text>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            

        </ChakraProvider>
    )
}



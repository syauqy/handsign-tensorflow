import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
    Container,
    VStack,
    Center,
    Box,
    Text,
    Button,
    Heading,

    //modal
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {motion} from 'framer-motion'
import '../styles/mainmenu.css'
import {Engine, Render, Runner, World, Bodies} from 'matter-js'

export default function MainMenu() {
    // const webcamRef = useRef(null);
    const boopRef = useRef(null);

    // let world; let deviceHeight; let deviceWidth; if (typeof window !==
    // 'undefined') {     world = document.querySelector(".boops");     deviceWidth
    // = window.innerWidth;     deviceHeight = window.innerHeight; }

    // function runAnimation() {
    //     setInterval(() => {
    //         emojiAnimation()
    //     }, 888);
    // }

    const emojis = [
        'https://ik.imagekit.io/ps3xes4nrg/fingcrossed_emoji_avhUZ4KvEg0c.svg',
        'https://ik.imagekit.io/ps3xes4nrg/heart_emoji_8n0j1a9KqwN.svg',
        'https://ik.imagekit.io/ps3xes4nrg/horns_emoji_FpTUEO8IL.svg',
        'https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg',
        'https://ik.imagekit.io/ps3xes4nrg/ok_emoji_hLw6a6BB-.svg',
        'https://ik.imagekit.io/ps3xes4nrg/thumbs_up_emoji_K0eZbiEtKb0.svg',
        'https://ik.imagekit.io/ps3xes4nrg/victory_emoji_EXqiolk0d8c.svg',
        'https://ik.imagekit.io/ps3xes4nrg/vulcan_emoji_GkdMsyHqdC.svg',
        'https://ik.imagekit.io/ps3xes4nrg/thinking_emoji_FUH1tBqEbBw.svg',
        'https://ik.imagekit.io/ps3xes4nrg/hush_emoji_V4Xkp1Zwr.svg',
        'https://ik.imagekit.io/ps3xes4nrg/fist_emoji_kvPDQvO2gr.svg',
        'https://ik.imagekit.io/ps3xes4nrg/pinch_emoji_xDRVg9Hz3JEn.svg',
        'https://ik.imagekit.io/ps3xes4nrg/gun_emoji_T-2sCCXbXe.svg',
        'https://ik.imagekit.io/ps3xes4nrg/pray_emoji_LLdMjWIegtu.svg',
        'https://ik.imagekit.io/ps3xes4nrg/backhand_right_emoji_0mGFeXPCH.svg',
        'https://ik.imagekit.io/ps3xes4nrg/call_me_emoji_OvAYOorfRdL.svg',
        'https://ik.imagekit.io/ps3xes4nrg/backhand_left_emoji_7bmFlF1CDLW.svg'
    ];

    // const deviceWidth = document.body.clientWidth; const deviceHeight =
    // document.body.clientHeight;

    let _titlemoji;

    let deviceWidth;
    let deviceHeight;
    let world;

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
    //         fillStyle: "red",
    //         strokeStyle: "red"
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

    function emojiAnimation() {
        if (typeof window !== 'undefined' && typeof boopRef.current !== "undefined") {
            world = boopRef.current;

            deviceWidth = window.innerWidth;
            deviceHeight = window.innerHeight;

            boopRef.current.width = deviceWidth;
            boopRef.current.height = deviceHeight;

            console.log('device width:', deviceWidth, 'device height:', deviceHeight);

            // boopClicked();
        }

    }

    // useEffect(() => {
    //     runAnimation()
    // }, []);

    return (
        <div className="main-menu">
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="center">
                    <Box h="50px"></Box>
                    <Box h="auto">
                        <Heading as="h1" size="4xl" color="purple.700">
                            HANDMOJI
                        </Heading>
                    </Box>
                    <Box h="auto">
                        <Heading
                            as="h3"
                            size="lg"
                            color="gray.700"
                            style={{
                            textAlign: "center"
                        }}>How many emoji you can make with your hand?</Heading>
                    </Box>
                    <Box h="100px"></Box>
                    <Box h="auto" id="play-button">
                        <Link to="/handsign">
                            <Button colorScheme="purple" size="lg">
                                <Text fontSize="2xl" color="purple.700">
                                    PLAY 🕹
                                </Text>

                            </Button>
                        </Link>

                    </Box>
                </VStack>

            </Container>

            {/* <button id="boop" onClick={boopClicked}>CLICK TO BOOP</button> */}

            <canvas className="boops" ref={boopRef}></canvas>
        </div>
    )
}

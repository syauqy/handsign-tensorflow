import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
    Container,
    VStack,
    Center,
    Box,
    Text,
    Button,
    Heading
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {motion} from 'framer-motion'
import '../styles/mainmenu.css'
import {Engine, Render, Runner, World, Bodies} from 'matter-js'

export default function app() {
    const world = document.querySelector(".boops");
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

    const deviceWidth = window.innerWidth;
    const deviceHeight = window.innerHeight;

    function emojiAnimation() {
        setInterval(() => {
            boopClicked();
        }, 888);
    }

    console.log('device width:', deviceWidth, 'device height:', deviceHeight);

    function createBall() {
        const xDrop = Math.round(Math.random() * deviceWidth);
        const emojiUrl = emojis[Math.floor(Math.random() * emojis.length)];
        const ball = Bodies.circle(xDrop, -30, 23, {
            angle: Math.PI * (Math.random() * 2 - 1),
            friction: 0.001,
            frictionAir: 0.01,
            restitution: 0.8,
            render: {
                sprite: {
                    texture: `${emojiUrl}`
                }
            }
        });
        console.log(emojiUrl, 'x:', xDrop);
        setTimeout(() => {
            World.remove(engine.world, ball);
        }, 30000);

        return ball;
    }

    const engine = Engine.create();
    const runner = Runner.create();
    const render = Render.create({
        canvas: world,
        engine: engine,
        options: {
            width: deviceWidth,
            height: deviceHeight,
            background: "transparent",
            wireframes: false
        }
    });

    const boundaryOptions = {
        isStatic: true,
        render: {
            fillStyle: "red",
            strokeStyle: "red"
        }
    };

    const ground = Bodies.rectangle(deviceWidth / 2, deviceHeight, deviceWidth, 4, boundaryOptions);
    const leftWall = Bodies.rectangle(0, deviceHeight / 2, 4, deviceHeight, boundaryOptions);
    const rightWall = Bodies.rectangle(deviceWidth, deviceHeight / 2, 4, deviceHeight, boundaryOptions);

    Render.run(render);
    Runner.run(runner, engine);

    World.add(engine.world, [ground, leftWall, rightWall]);

    const boopClicked = () => {
        const ball2 = createBall();
        // console.log('booped');
        World.add(engine.world, [ball2]);
    }

    emojiAnimation();

    return (
        <div className="main-menu">
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="center">
                    <Box h="auto">
                        <Heading as="h1" size="4xl">
                            HANDMOJI
                        </Heading>
                    </Box>
                    <Box h="auto">
                        <Heading as="h3" size="lg">How many emoji you can make with your hand?</Heading>
                    </Box>
                    <Box h="auto" bg="pink.100">
                        <Link to="/handsign">
                            <Button colorScheme="teal" size="md">
                                PLAY
                            </Button>
                        </Link>

                    </Box>
                </VStack>

            </Container>
            {/* <button id="boop" onClick={boopClicked}>CLICK TO BOOP</button> */}

            <canvas className="boops"></canvas>
        </div>
    )
}

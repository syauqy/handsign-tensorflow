import React from 'react'
import {Container, VStack, Center, Box} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import '../styles/mainmenu.css'
import {Engine, Render, Runner, World, Bodies} from 'matter-js'

export default function app() {
    const world = document.querySelector(".boops");
    const emojis = [
        'https://handemoji-ycbu6.ondigitalocean.app/static/victory_emoji-3ea45b00bb247c0a2318cc420313b539.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/ok_emoji-37c54459c81eb1ba0ad30ec985435f7c.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/horns_emoji-aa25b08920e8bb4717a39d781a45af5c.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/vulcan_emoji-7de16378a23f53109f318be93077f0c6.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/heart_emoji-d3621f36f76af5563d10606e441fb025.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/fingcrossed_emoji-ed0b19926ff3a53c3d091662a3d75e30.png',
        'https://handemoji-ycbu6.ondigitalocean.app/static/thumbs_up_emoji-09ed8ec30ef0adfeff564bbf17ea3050.png'
    ]

    function createBall() {
        const emojiUrl = emojis[Math.floor(Math.random() * emojis.length)];
        const ball = Bodies.circle(Math.round(Math.random() * 1280), -30, 25, {
            angle: Math.PI * (Math.random() * 2 - 1),
            friction: 0.001,
            frictionAir: 0.01,
            restitution: 0.8,
            render: {
                sprite: {
                    texture: emojiUrl
                }
            }
        });
        console.log(emojiUrl);
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
            width: 1280,
            height: 720,
            background: "transparent",
            wireframes: false
        }
    });

    const boundaryOptions = {
        isStatic: true,
        render: {
            fillStyle: "transparent",
            strokeStyle: "transparent"
        }
    };

    const ground = Bodies.rectangle(640, 720, 1300, 4, boundaryOptions);
    const leftWall = Bodies.rectangle(0, 360, 4, 740, boundaryOptions);
    const rightWall = Bodies.rectangle(1280, 360, 4, 800, boundaryOptions);

    Render.run(render);
    Runner.run(runner, engine);

    World.add(engine.world, [ground, leftWall, rightWall]);

    const boopClicked = () =>{
        const ball2 = createBall();
        console.log('booped');
  World.add(engine.world, [ball2]);
    }

    return (
        <div className="main-menu">
            <Container maxW="xl" centerContent>
                <VStack spacing={4} align="stretch">
                    <Box h="40px" bg="yellow.200">
                        1
                    </Box>
                    <Box h="40px" bg="tomato">
                        2
                    </Box>
                    <Box h="40px" bg="pink.100">
                        3
                    </Box>
                    <motion.div
                        className="lovemoji"
                        initial={{
                        scale: 0
                    }}
                        animate={{
                        rotate: 180,
                        scale: 1
                    }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}/>

                    

                </VStack>

            </Container>
            <button id="boop" onClick={boopClicked}>CLICK TO BOOP</button>

                    <canvas className="boops"></canvas>
        </div>
    )
}

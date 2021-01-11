import React, {useRef} from 'react';
import {
    Container,
    VStack,
    Box,
    Text,
    Button,
    Heading,
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import '../styles/mainmenu.css'

export default function MainMenu() {
    // const webcamRef = useRef(null);
    const boopRef = useRef(null);

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

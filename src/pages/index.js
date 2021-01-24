import React from "react"

import { ChakraProvider } from '@chakra-ui/react'
import App from "./app"

const IndexPage = () => (
  <ChakraProvider id="chakra-provider">
    <App />
  </ChakraProvider>
)

export default IndexPage

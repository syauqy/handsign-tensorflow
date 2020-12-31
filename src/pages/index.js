import React from "react"
import { Link } from "gatsby"
import App from './app'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ChakraProvider } from '@chakra-ui/react'
import Handsign from "./handsign"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />

  //   <App />
  // </Layout>
  <ChakraProvider id="chakra-provider">
    <div id="chakra=prov">
    <App />
    {/* <Handsign /> */}
    </div>
    {/* <Handsign/> */}
    
  </ChakraProvider>
)

export default IndexPage

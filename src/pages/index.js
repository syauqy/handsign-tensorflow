import React from "react"
// import { Link } from "gatsby"
import MainMenu from './app'
import { Helmet } from "react-helmet"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import { ChakraProvider } from '@chakra-ui/react'
import Handsign from "./handsign"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />

  //   <App />
  // </Layout>
  <ChakraProvider id="chakra-provider">
    <Helmet>
          <meta charSet="utf-8" />
          <title>Handmoji | Start</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
    <Handsign />
    
  </ChakraProvider>
)

export default IndexPage

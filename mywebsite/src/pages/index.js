import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ 
      maxWidth: 'auto',
      padding: '15rem', 
      margin: '0rem', 
      textAlign: "center"}}> 
      HI, I'M THORSTEINN JÓNSSON
      </h1>
  </Layout>
)

export default IndexPage

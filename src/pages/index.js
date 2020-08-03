import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Hook from "../components/hook"
import Steps from "../components/steps"
import Story from "../components/story"
import Product from "../components/product"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Hook />
    <Steps />
    <Story />
    <Product />
    <Footer />
  </Layout>
)

export default IndexPage

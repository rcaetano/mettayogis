import Head from 'next/head'
import { Fragment } from 'react'
import About from '../components/About'

function faq() {
  return (
    <Fragment>
      <Head>
        <title>Crypto Monks Attributes</title>
        <meta name="description" content="XXXXXXX" />
      </Head>
      <About />
    </Fragment>
  )
}

export default faq

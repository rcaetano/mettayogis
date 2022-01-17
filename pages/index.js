import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Crypto Monks</title>
        <meta name="description" content="Crypto Monks NFTs" />
      </Head>
      <Intro />
    </Fragment>
  )
}

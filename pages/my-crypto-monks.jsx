import Head from 'next/head'
import { Fragment } from 'react'
import CryptoMonks from '../components/CryptoMonks'

function MyCryptoMonks() {
  return (
    <Fragment>
      <Head>
        <title>My Crypto Monks</title>
        <meta name="description" content="XXXXXXX" />
      </Head>
      <CryptoMonks />
    </Fragment>
  )
}

export default MyCryptoMonks

import Head from 'next/head'
import { Fragment } from 'react'
import Traits from '../components/Traits'

function AttributesPage() {
  return (
    <Fragment>
      <Head>
        <title>Crypto Monks Attributes</title>
        <meta name="description" content="XXXXXXX" />
      </Head>
      <Traits />
    </Fragment>
  )
}

export default AttributesPage

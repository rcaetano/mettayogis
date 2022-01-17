import { Fragment } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function index(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default index

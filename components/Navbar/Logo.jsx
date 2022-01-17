import Image from 'next/image'
import classes from './Logo.module.css'

function Logo() {
  return (
    <div className={classes.logo}>
      {/* <Image src="/crown_2.png" width="60%" height="60%" alt="Crown" /> */}
      <div style={{ marginLeft: '5px' }}>Crypto Monks</div>
    </div>
  )
}

export default Logo

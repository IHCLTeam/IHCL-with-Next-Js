import '../styles/stylesvenkat/globals.css'
import '../styles/stylesanthosh/globals.css'
import '../styles/amitstyles/globals.css'
import '../styles/stylesaditya/globals.css'
import '../styles/stylesindoo/globals.css'

// import Navbar from '../NavbarFiles/navbar'
import PositionedMenu from '../componentindoo/MenuItem'


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* // <Navbar /> */}
      <PositionedMenu />
      <Component {...pageProps} />
    </>
  )
}


export default MyApp

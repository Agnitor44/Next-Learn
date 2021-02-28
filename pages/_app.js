import '../styles/globals.css'
import Layaout from '../components/Layaout'
function MyApp({ Component, pageProps }) {

  return(
    <Layaout>
<Component {...pageProps} />
    </Layaout>
  )
  
}

export default MyApp

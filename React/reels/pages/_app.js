import '../styles/globals.css'
import './signup/signup.css'
import './login/login.css'
import '../components/Feed.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-ERE0J2PE94"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

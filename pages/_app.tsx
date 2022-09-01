import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-239783277-1"; // OUR_TRACKING_ID

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize(TRACKING_ID);
  return <Component {...pageProps} />
}

export default MyApp

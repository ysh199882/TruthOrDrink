import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from "react-ga4";

ReactGA.initialize("G-ERE0J2PE94");
ReactGA.send("真心话大冒险首页");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

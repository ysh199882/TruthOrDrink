import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import ReactGA from "react-ga4";


const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const Home: NextPage = () => {
  const gaEventTracker = useAnalyticsEventTracker('index.tsx');
  return (
    <div className="h-full">
      <Head>
        <title> 真心话 or 大冒险</title>
        <link rel="icon" href="/favicon.ico" />
        <Script strategy="afterInteractive" src="https://omni.aru.wtf/script.js" />
      </Head>

      <div className="container flex mx-auto p-4 fixmobilevh">
        <div className="m-auto">
          <div className="select-none text-4xl text-header font-semibold mx-auto text-center align-middle pb-2">
            真心话 <span className="text-xl align-middle">O R</span> 大冒险
          </div>

          <div className="select-none rounded-lg bg-[#8D889F] text-center text-white font-bold max-w-fit px-4 m-auto">
            O N L I N E
          </div>

          <br/>

          <div className="select-none text-center font-bold max-w-fit px-4 m-auto text-[#8D889F] pb-4 pt-4">
            S E L E C T  &nbsp; M O D E:
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href='/game?mode=normal'>
              <div className="select-none cursor-pointer text-white font-bold text-xl rounded-xl p-4 shadow-xl w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#00C5FF] to-[#009BFF]" onClick={()=>gaEventTracker('正常')}>
                正常
              </div>
            </Link>
            <Link href='/game?mode=party'>
              <div className="select-none cursor-pointer text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FFC300] to-[#FF8900]"
              onClick={()=>gaEventTracker('喝嗨了')}>
                喝嗨了
              </div>
            </Link>
          </div>

          <br/>

          <div className="grid grid-cols-2 gap-4">
            <Link href='/game?mode=dirty'>
              <div className="select-none cursor-pointer text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#FF006D] to-[#FC0023]" onClick={()=>gaEventTracker('脏话')}>
                脏话
              </div>
            </Link>
            <Link href='/game?mode=dares'>
              <div className="select-none cursor-pointer text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]" onClick={()=>gaEventTracker('大冒险')}>
                大冒险
              </div>
            </Link>
          </div>

          <br/> 

          <Link href='/game?mode=mix'>
            <div className="select-none cursor-pointer text-white font-bold text-xl border-black rounded-xl p-4 shadow-md w-full flex-1 mx-auto text-center bg-black">
              全都要
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Home

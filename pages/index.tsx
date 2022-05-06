import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter App</title>
      </Head>

      <SideBar />

      
    </div>
  )
}

export default Home

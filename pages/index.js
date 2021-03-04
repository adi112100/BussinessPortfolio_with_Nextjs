import Head from 'next/head'

import LeftSideBar from '../Components/MainPage/LeftSideBar'
import Navbar from '../Components/MainPage/Navbar'
import RightSideBar from '../Components/MainPage/RightSideBar'
import Title from '../Components/MainPage/Title'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MainPage</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-7">
            <Title/>
            <LeftSideBar/>
          </div>
          <div className="col-12 col-lg-5">
            <Navbar/>
            <RightSideBar/>
          </div>
        </div>
      </div>
      


    </div>


  );
}

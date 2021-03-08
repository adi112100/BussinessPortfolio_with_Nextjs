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
          <div className="col-12 col-lg-6">
            <Title/>
          </div>
          <div className="col-12 col-lg-6">
            <Navbar/>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-7">
            <LeftSideBar/>
          </div>
          <div className="col-12 col-lg-5">
            <RightSideBar/>
          </div>
        </div>
      </div>
      


    </div>


  );
}

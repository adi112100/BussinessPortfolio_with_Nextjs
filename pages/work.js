import Head from 'next/head'

import styles from '../styles/Work.module.css'

import Navbar from '../Components/MainPage/Navbar'
import WorkTitle from '../Components/Work/WorkTitle'
import WorkHead from '../Components/Work/WorkHead'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <WorkTitle />
          </div>
          <div className="col-12 col-md-6">
            <Navbar />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{padding:0}}>
            <WorkHead />
          </div>

        </div>
      </div>


    </div>


  );
}

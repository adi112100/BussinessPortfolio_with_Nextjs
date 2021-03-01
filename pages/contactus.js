import Head from 'next/head'
import Contactusend from '../Components/ContactUS/Contactusend';
import Contactusmain from '../Components/ContactUS/Contactusmain';

import Contactustag from '../Components/ContactUS/Contactustag';
import Navbar from '../Components/MainPage/Navbar';
import Title from '../Components/MainPage/Title'

import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact-us</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <Title />
          </div>
          <div className="col-12 col-md-6">
            <Navbar />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <Contactustag />
        </div>
        <div className="row">
          <Contactusmain />
        </div>
        <div className="row">
          <Contactusend />
        </div>
      </div>
    </div>



  );
}

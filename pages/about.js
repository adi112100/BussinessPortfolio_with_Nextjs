import Head from 'next/head'
import Aboutusmain from '../Components/AboutUS/Aboutusmain'
import Aboutustag from '../Components/AboutUS/Aboutustag'


import Navbar from '../Components/MainPage/Navbar'
import Title from '../Components/MainPage/Title'
import styles from '../styles/About.module.css'


export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MainPage</title>
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
                    <Aboutustag />
                </div>
                <div className="row">
                    <Aboutusmain />
                </div>

            </div>



        </div>


    );
}

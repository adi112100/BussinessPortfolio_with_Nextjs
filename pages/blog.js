import Head from 'next/head'
import Blogend from '../Components/Blog/Blogend';

import Blogmain from '../Components/Blog/Blogmain';
import Navbar from '../Components/MainPage/Navbar';
import WorkTitle from '../Components/Work/WorkTitle';

import styles from '../styles/Blog.module.css'

export default function Blog() {
    return (
        <div className={styles.container}>
            <Head>
                <title>blog</title>
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

            <Blogmain />
            <Blogend />

        </div>



    );
}

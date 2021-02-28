import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <>
            <div className="d-none d-lg-block">
                <div className={styles.container}>
                    <Link href='/about'><p className={styles.navlink}>ABOUT US</p></Link>
                    <Link href='/work'><p className={styles.navlink}>WORK</p></Link>
                    <Link href='/contactus'><p className={styles.navlink}>CONTACT US</p></Link>
                </div>
            </div>
            <div className="d-md-none">
                <div className={styles.hamburger}>
                    <MenuIcon fontSize="large"/>
                </div>
            </div>
        </>
    )
}

export default Navbar

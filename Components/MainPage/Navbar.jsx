import React from 'react'
import styles from '../../styles/Nav.module.css'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <>
            <div className="d-none d-lg-block">
                <div className={styles.container}>
                    <p className={styles.navlink}>ABOUT US</p>
                    <p className={styles.navlink}>WORK</p>
                    <p className={styles.navlink}>CONTACT US</p>
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

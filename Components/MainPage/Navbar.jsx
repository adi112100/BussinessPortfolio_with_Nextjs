import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import zIndex from '@material-ui/core/styles/zIndex';

const Navbar = () => {
    const animstyles = {
        fadeIn: {
            animation: 'x 0.8s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    }

    const [toggle, setToggle] = useState(0);

    const togglevalue = () => {

        if (toggle === 0) setToggle(1)
        else setToggle(0)
    }


    return (
        <>
            <div className="d-none d-lg-block">
                <div className={styles.container}>
                    <Link href='/about'><p className={styles.navlink}>ABOUT US</p></Link>
                    <Link href='/work'><p className={styles.navlink}>WORK</p></Link>
                    <Link href='/contactus'><p className={styles.navlink}>CONTACT US</p></Link>
                </div>
            </div>
            <div className="d-lg-none">
                <div className={styles.hamburger}>
                    <div style={{ cursor: 'pointer' }} onClick={() => togglevalue()}>
                        {
                            toggle ?
                                <>
                                    <ClearIcon fontSize="large" />
                                    <StyleRoot>
                                        <div style={animstyles.fadeIn}>

                                            <div style={{
                                                position: 'absolute',
                                                top: '15vh',
                                                left: '0px',
                                                height: '100%',
                                                width: '100%',
                                                zIndex: 1,
                                                backgroundColor: 'rgba(0,0,0,0.9)',
                                                borderTopLeftRadius: '35px',
                                                borderTopRightRadius: '35px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                padding: '20px'


                                            }}
                                            >
                                                <Link href='/about'><p className={styles.navlink}>ABOUT US</p></Link>
                                                <Link href='/work'><p className={styles.navlink}>WORK</p></Link>
                                                <Link href='/contactus'><p className={styles.navlink}>CONTACT US</p></Link>
                                            </div>
                                        </div>

                                    </StyleRoot>

                                </>
                                :
                                <>
                                    <MenuIcon fontSize="large" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

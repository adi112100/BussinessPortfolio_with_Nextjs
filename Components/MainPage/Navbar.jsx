import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

// import { fadeIn } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Navbar = () => {
    // const animstyles = {
    //     fadeIn: {
    //         animation: 'x 0.8s',
    //         animationName: Radium.keyframes(fadeIn, 'fadeIn')
    //     }
    // }

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
                                    {/* <StyleRoot> */}
                                    {/* <div style={animstyles.fadeIn}> */}
                                    <div>
                                        <Flip right>
                                            <div style={{
                                                position: 'absolute',
                                                top: '15vh',
                                                left: '10vw',
                                                height: '85vh',
                                                width: '80vw',
                                                zIndex: 2,
                                                backgroundColor: 'rgba(0,0,0,0.9)',
                                                borderTopLeftRadius: '35px',
                                                borderTopRightRadius: '35px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                padding: '20px',
                                                color: 'white',
                                                fontSize: '6vw',
                                                fontWeight: '500'




                                            }}
                                            >
                                                <Fade left>
                                                    <Link href='/about'><p>ABOUT US</p></Link>
                                                    <Link href='/work'><p>WORK</p></Link>
                                                    <Link href='/contactus'><p>CONTACT US</p></Link>
                                                </Fade>
                                            </div>
                                        </Flip>
                                    </div>

                                    {/* </StyleRoot> */}

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

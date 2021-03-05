import React from 'react'
import styles from '../../styles/Work.module.css'

import Fade from 'react-reveal/Fade';

const Worktemplate = ({ data }) => {
    let imagestack = []
    for (let i=1; i<=4; ++i)
    {
        for (let j = 0; j < data.images.length; ++j) imagestack.push(<img key={10*i + j} src={data.images[j]} className='shadow-lg' />)
    }
   

    return (
        <div className={styles.worktemplate_container}>
            {/* {JSON.stringify(data)} */}


            <div className="d-none d-md-block container-fluid">
                {/* hide on screens smaller than medium */}
                <Fade bottom>
                    <div className="row">
                        <h1 className={styles.project_title_desktop}>{data.title}</h1>
                    </div>
                </Fade>

                <div className={`row ${styles.project_header_desktop}`}>
                    <Fade bottom>
                        <div className="col-md-4">
                            <h3>For <span style={{ color: '#392f94' }}>{data.industry}</span></h3>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-8 shadow-lg"
                            style={{
                                display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '30px 0px 30px 0px', borderRadius: '50px'
                            }}>
                            <div className={styles.flex_header_item}>
                                <p>Platform</p><br />{data.platform}
                            </div>
                            <div className={styles.flex_header_item}>
                                <p>Technologies</p><br />{data.technologies}
                            </div>
                            <div className={styles.flex_header_item}>
                                <p>Year</p><br />{data.year}
                            </div>
                        </div>
                    </Fade>
                </div>

                <Fade left>
                    <div className={`row ${styles.project_main_desktop}`}>
                        <div className={`col-md-7 col-xl-6 shadow-lg ${styles.project_mainleft_desktop}`}>
                            <h3>Description</h3>
                            <br /><br />
                            <p>{data.description}</p>
                        </div>
                        <div className="col-md-5 col-xl-6">
                            <div className={styles.project_image_container}>
                                <div className={styles.project_image}>
                                    {imagestack}
                                </div>

                            </div>


                        </div>

                    </div>
                </Fade>


            </div>



            <div className="d-md-none container-fluid">
                {/* hide on medium and wider screens */}
            </div>

        </div>
    )
}

export default Worktemplate

import React from 'react'
import styles from '../../styles/Work.module.css'

import Fade from 'react-reveal/Fade';

const Worktemplate = ({ data }) => {
    let imagestack = []
    for (let i = 1; i <= 4; ++i) {
        for (let j = 0; j < data.images.length; ++j) imagestack.push(<img key={10 * i + j} src={data.images[j]} className='shadow-lg' />)
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


                <div className={`row ${styles.project_main_desktop}`}>
                    <Fade left>
                        <div className={`col-md-7 col-lg-6 col-xl-3 shadow-lg ${styles.project_mainleft_desktop}`}>
                            <h3>Description</h3>
                            <br /><br />
                            <p>{data.description}</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-md-5 col-lg-6 col-xl-9">
                            <div className={styles.project_image_container}>
                                <div className={styles.project_image}>
                                    {imagestack}
                                </div>
                            </div>
                        </div>
                    </Fade>

                </div>



            </div>



            <div className="d-md-none container-fluid">
                {/* hide on medium and wider screens */}
                
                <Fade bottom>
                    <div className="row">
                        <div className="col-12">
                        <h1 className={styles.project_title_mobile}>{data.title}</h1>
                        </div>
                       
                    </div>
                </Fade>

                <div className={`row ${styles.project_header_mobile}`}>
                    <Fade bottom>
                        <div className="col-12" style={{marginBottom:'20px'}}>
                            <h3>For <span style={{ color: '#392f94' }}>{data.industry}</span></h3>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-12 shadow-lg"
                            style=
                            {{
                                display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 0px 30px 0px', borderRadius: '50px',
                                height:'100px', overflow:'scroll'
                            }}>
                            <div className={styles.flex_header_item_mobile}>
                                <p>Platform</p><br />{data.platform}
                            </div>
                            <div className={styles.flex_header_item_mobile}>
                                <p>Technologies</p><br />{data.technologies}
                            </div>
                            <div className={styles.flex_header_item_mobile}>
                                <p>Year</p><br />{data.year}
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className={`row ${styles.project_main_mobile}`}>
                <Fade bottom>
                        <div className="col-12">
                            <div className={styles.project_image_container_mobile}>
                                <div className={styles.project_image_mobile}>
                                    {imagestack}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={`col-12 shadow-lg ${styles.project_desc_mobile}`}>
                            <h3>Description</h3>
                            <br /><br />
                            <p>{data.description}</p>
                        </div>
                    </Fade>

                </div>
            </div>

        </div>
    )
}

export default Worktemplate

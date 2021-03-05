import React from 'react'
import styles from '../../styles/Work.module.css'

const Worktemplate = (props) => {
    return (
        <div className={styles.worktemplate_container}>
           {JSON.stringify(props.data)}
        </div>
    )
}

export default Worktemplate

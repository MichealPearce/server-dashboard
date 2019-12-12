import React from 'react'
import {Switch} from 'react-router-dom'

import styles from 'styles/common.module'

export default function ViewContainer(props) {
    return (
        <div className={styles.view} >
            <Switch>
                {props.children}
            </Switch>
        </div>
    )
}

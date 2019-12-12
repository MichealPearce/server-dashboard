import React from 'react'
import cls from 'classnames'

import styles from 'styles/common.module'

export default function Page(props) {
    return (
        <div {...props} className={cls(styles.page, props.className)} >
            <h1 className={styles.title} >{props.pagetitle}</h1>
            {props.children}
        </div>
    )
}

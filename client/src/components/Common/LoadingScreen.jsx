import React from 'react'

import styles from 'styles/common.module'

export default function LoadingScreen() {
    return (
        <div className={styles.loadingScreen} >
            <div className={styles.loader} />
        </div>
    )
}

import React, {useMemo, useState} from 'react'

import {formatBytesToString} from 'libs/formatBytes'
import UseInterval from 'hooks/UseInterval'

import Section from 'components/Common/Section'
import ProgressBar from 'components/Common/ProgressBar'

import styles from 'styles/components/SystemInfo.module'

const socket = require('libs/socket')

function getStorageUnits(fsSize) {
    let size = ([n,s]) => (
        <div className={styles.size} >
            <span>{n}</span>
            <span>{s}</span>
        </div>
    )

    return fsSize.map(data => {
        return (
            <div key={data.fs} className={styles.group} >
                <div title={data.fs} className={styles.name} >{data.fs}</div>
                <div className={styles.type} >{data.type}</div>
                {size(formatBytesToString(data.size, true))}
                <ProgressBar
                    title={data.use+'%'}
                    className={styles.bar}
                    percent={data.use}
                />
            </div>
        )
    })
}

export default function Storage() {

    let [fsSize, setFsSize] = useState([])

    UseInterval(() => {
        socket.emit('system', 'fsSize', null, setFsSize)
    }, 10000)

    let units = useMemo(() => {
        return getStorageUnits(fsSize)
    }, [fsSize])

    if(fsSize.length < 1) return false
    return (
        <Section title="Storage" pclass={styles.storage} >
            <div className={styles.models} >
                {units}
            </div>
        </Section>
    )
}

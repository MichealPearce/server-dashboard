import React from 'react'
import {connect} from 'react-redux'

import Row from 'components/Common/Row'
import Column from 'components/Common/Column'

import Memory from './Memory'
import Storage from './Storage'
import Network from './Network'

import styles from 'styles/components/SystemInfo.module'

function SystemInfo({data}) {
    return (
        <Row className={styles.systeminfo} >
            <Column className={styles.asideLeft} >
                <Memory mem={data.mem} />
                <Network networkStats={data.networkStats} />
            </Column>
            <Column className={styles.asideRight} >
                <Storage fsSize={data.fsSize} />
            </Column>
        </Row>
    )
}

const mapState = ({staticData, dynamicData}) => ({
    data: {
        ...staticData,
        ...dynamicData
    }
})

export default connect(mapState)(SystemInfo)

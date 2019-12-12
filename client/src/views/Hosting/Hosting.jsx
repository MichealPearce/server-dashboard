import React, {useMemo} from 'react'
import {connect} from 'react-redux'

import Page from 'components/Common/Page'

import styles from 'styles/views/Hosting.module'

function Hosting({apache}) {
    
    let sites = useMemo(() => {
        return apache.sites.map(site => {
            return (
                <div key={site.ServerName} className={styles.site} >
                    <h2>{site.ServerName}</h2>
                </div>
            )
        })
    }, [apache])

    return (
        <Page pagetitle="Web Hosting" className={styles.page} >
            <div className={styles.container} >
                {sites}
            </div>
        </Page>
    )
}

const mapState = ({apache}) => ({
    apache
})

export default connect(mapState)(Hosting)
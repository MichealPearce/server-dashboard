import React from 'react'
import {Route} from 'react-router-dom'

//Components
import LoadingScreen from 'components/Common/LoadingScreen'
import Navigation from 'components/Navigation'
import ViewContainer from 'components/Common/ViewContainer'

import Views from 'views'

//Styles
import styles from 'styles/App.module'

//connection to server
const socket = require('libs/socket')

export default function App() {
    if (!socket) return <LoadingScreen />
    return (
        <div className={styles.app} >
            <Navigation />
            <ViewContainer className={styles.app} >
                <Route exact path="/" component={Views.Home} />
                <Route path="/hosting" component={Views.Hosting} />
            </ViewContainer>
        </div>
    );
}

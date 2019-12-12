import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

import UseInterval from 'hooks/UseInterval'

import styles from 'styles/components/Navigation.module'

const socket = require('libs/socket')

export default function Navigation() {

    let [time, setTime] = useState(0)

    UseInterval(() => {
        socket.emit('system', 'time', null, setTime)
    }, 1000)

    return (
        <nav className={styles.navigation} >
            <div className={styles.header} >
                <h1>Server Dashboard</h1>
                <h4>{moment(time.current).format('h:mm:ss a')}</h4>
            </div>

            <div className={styles.menu} >
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/hosting" >Web Hosting</NavLink>
            </div>
        </nav>
    )
}
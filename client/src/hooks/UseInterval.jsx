import {useEffect, useState} from 'react'

export default function UseInterval(func, interval) {
    let [updateTimer, setUpdateTimer] = useState(false)  
    return useEffect(() => {
        func()
        setUpdateTimer(setInterval(func, interval))
        return () => clearInterval(updateTimer)
    // eslint-disable-next-line
    }, [])
}
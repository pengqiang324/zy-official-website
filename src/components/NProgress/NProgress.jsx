import React, { useEffect, Fragment } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const NProgress = () => {
    useEffect(() => {
        nprogress.start()
        return () => {
            nprogress.done()
        }
    }, [])
    return (
        <Fragment />
    )
}

export default NProgress

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Protected(props) {
    let CMP = props.comp
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push('/login')
        }
     }, [])
     const history = useHistory()
    return (
        <div>
            <CMP/>
        </div>
    )
}

export default Protected

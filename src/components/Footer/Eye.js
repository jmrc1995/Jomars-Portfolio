import React from 'react'
import whiteEye from '../../assets/w_eye.svg'
import '../Footer/Eye.css'

function Eye() {
    return (
        <a styles ='{{display: "table-cell"}}' 
            href='https://github.com/jmrc1995/Greensia-Earthworks-JMRC' target="_blank" rel = "noopener noreferrer">
            <img src={whiteEye} alt='Logo' className='jmrc-logo' />
        </a>
    )
}

export default Eye

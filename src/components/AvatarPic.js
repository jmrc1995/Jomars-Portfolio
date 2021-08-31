import React from 'react'
import avatar from '../assets/jmrc2020.png'
import './AvatarPic.css'




function AvatarPic() {
    return (
        <span className='animate__animated animate__fadeIn'>
        <img src={avatar} alt='Avatar' className='avatar-pic' />
        </span>
    
        
    )
}

export default AvatarPic

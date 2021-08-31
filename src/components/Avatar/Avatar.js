import React, { Component } from 'react'
import AvatarPic from '../AvatarPic';
import '../Avatar/Avatar.css'

export class Avatar extends Component {
    render() {
        return (
            <>

                <div className = 'main-container-avatar'>
                    
                    <div className="hiding-parent">
                        
                        <div className='transparent-container'>
                         
                            <h1> 2021 </h1>
                        
    
                        </div>
                     
                        <AvatarPic />
    
                     
                         </div>

                    </div>
                
            </>
        )
    }
}

export default Avatar

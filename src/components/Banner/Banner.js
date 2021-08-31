import React, { Component } from 'react';
import './Banner.css';
import AvatarPic from '../AvatarPic';
import '../AvatarPic.css';
import '../Button.css';








export class Banner extends Component {

   
        render() {
           
      
            

        return (
                <>
            <div className = 'flex-row'>
                <div className = 'main-container'>
                    
                    
                    <div className = 'banner-box-container'> 
                    
                    <h1 className='header-text'> Hi, my name is Jomar Cardoza</h1>
                    
                    <p className='body-text'> I am an innovative Software Engineer,
                    dedicated to improving user experience. </p>
                
                    
                    </div>

                </div>
              

                </div>

                </>
        )
    }
}

export default Banner

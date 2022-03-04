import React, { Component } from 'react'
import '../Footer/Footer.css'
import Eye from '../../assets/whiteeye.png'

export class Footer extends Component {
    render() {
        return (
            <div>

            <nav className = "footer-container">
            
                <div>


                
                    <span className='animate__animated animate__fadeIn'>

                        <img src={Eye} className='eye-logo'/>
                        
                
                         
                    </span>
                
                </div>
                
                
            
              
                </nav>
                
            </div>
        )
    }
}

export default Footer

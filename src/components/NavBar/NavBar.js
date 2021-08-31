import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './NavBar.css';
import 'animate.css'




class NavBar extends Component {
    
    constructor(props) {
        
        super(props)
        
        this.state = { 
            
            hover : true}  

    }



    render(){
        return(
            <nav className = "NavBarItems">
            
            <h1 className="navbar-logo"><span className='animate__animated animate__fadeIn'>JMRC</span></h1>
                
                
                <ul className = 'nav-menu'>
                    
                    {MenuItems.map((item, index)=>{
                        return(
                
                    <li key={index} >
                            
                          
                        <a className={item.cName} href={item.url} >
         
                            <span className='animate__animated animate__fadeIn'>
                                {item.title}
                            </span>
                        </a>
                
                    </li>   
                    )}
                )}
                </ul>
              
                </nav>
            )
        }
    }

export default NavBar

import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutDotMe} from 'react-icons/si'
import {AiOutlineFolderOpen} from 'react-icons/ai'

export const MenuItems = [
    {
        title: 'Home',
        url: '#',
        cName: 'nav-links',
        icon: <AiOutlineHome className='nav-icons'/>


    },
 
    {
        title: 'Projects',
        url: '#',
        cName: 'nav-links',
        icon: <AiOutlineFolderOpen className='nav-icons'/>

    },

       {
        title: 'About',
        url: '#',
        cName: 'nav-links',
        icon: <SiAboutDotMe className='nav-icons'/>


    }
]
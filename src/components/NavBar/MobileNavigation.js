
import navStyles from './NavBar.module.css';
import NavLinks from './NavLinks'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

    

    
const MobileNavigation = () =>
{
    
    const [open, setOpen] = useState(false);
    const animateTo = { opacity: 0, x: 0}

    

    const closeIcon = <AiOutlineClose
                            className={navStyles.Close}
                            size='25px'
                            color='white'
                            onClick={() => setOpen(!open)}
                            animate = {animateTo} />
                            

    const hamburgerIcon =  <AiOutlineMenu
                            className={navStyles.Hamburger}
                            size='25px'
                            color='white'
                            onClick={() => setOpen(!open)} />
    
    const closeMobileMenu = () => setOpen(false);

    return (
    
        <nav className={navStyles.MobileNavigation}>
           
            {open && <NavLinks />}
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

        </nav>
    );
}

export default MobileNavigation

import navStyles from './NavBar.module.css';
import NavLinks from './NavLinks'

const Navigation = () =>
{
    return (
        <nav className={navStyles.Navigation}>
            <NavLinks />
					
	    </nav>
		
    );
}

export default Navigation
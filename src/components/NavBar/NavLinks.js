import MenuItems from './MenuItems'
import navStyles from './NavBar.module.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavLinks = (props) =>
{
	const animateFrom = { opacity: 0, x: 0 }
	const animateTo = { opacity: 1, x: 0 }
	const transition = { ease: "easeIn", duration: 0.2}
	
	return (
    
		<motion.ul
			className={navStyles.NavLinks}
			transition ={transition}
		
			>
	
			{MenuItems.map((item, index) => {
				return (
					<motion.li
						key={index}
						onClick={() => props.isMobile && props.closeMobileMenu()}
						initial={ animateFrom }
						animate={ animateTo }
						transition = {transition} >
						<a href={item.url}>
							<span className="animate__animated animate__fadeIn">{item.title}</span>
						</a>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};
export default NavLinks;
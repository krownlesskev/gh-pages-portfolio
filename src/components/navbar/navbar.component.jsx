import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/skills'>SKILLS</Link>
                <Link className='link' to='/projects'>PROJECTS</Link>
                <Link className='link' to='/contact'>CONTACT</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
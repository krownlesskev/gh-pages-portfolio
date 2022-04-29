import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/skills'>Skills</Link>
                <Link className='link' to='/projects'>Projects</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
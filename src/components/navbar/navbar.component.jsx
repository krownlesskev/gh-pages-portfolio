import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    {/* <li> <Link to='/dashboard'>DashBoard</Link></li> */}
                    <li> <Link to='/user-list'>User List</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
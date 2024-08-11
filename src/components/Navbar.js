import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="navbar-logo">
                <span>RC solutions</span>
            </div>
            <ul>
                <li>
                  <Link to={'/'} >Home</Link>
                </li>
                <li>
                  <Link to={'/about'} >About</Link>
                </li>
                <li>
                  <Link to={'/'} >Contact</Link>
                </li>
                <li>
                  <Link to={'/'} >Blog</Link>
                </li>

            </ul>
        </div>
        <div className="profile"></div>
        </>
    )
}
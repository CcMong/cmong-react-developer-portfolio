import { NavLink } from "react-router-dom";

function Header() {

    return (

        <header>
            <h3>Logo</h3>
            <nav>
                <ul className="nav-bar">
                    <li className = "nav-links">
                        <NavLink to="/" end>Home</NavLink>
                    </li>

                    <li className = "nav-links">
                        <NavLink to="/about" end>About</NavLink>
                    </li>

                    <li className = "nav-links">
                        <NavLink to="/portfolio" end>Project Portfolio</NavLink>
                    </li>

                    <li className = "nav-links">
                        <NavLink to="/" end>Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </header>

    )
}

export default Header;
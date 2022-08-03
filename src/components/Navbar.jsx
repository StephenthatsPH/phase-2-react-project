import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/form">Form</NavLink>
    </nav>
    );
}   

export default NavBar;
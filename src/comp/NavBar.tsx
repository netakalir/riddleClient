import { Link } from "react-router";
import "./navBar.css"

export default function NavBar() {
    return (
        <div className="navBar">
            <Link className="links" to="/game">play game</Link>
            <Link className="links" to="/register">register</Link>
            <Link className="links" to="/login">login</Link>
            <Link className="links" to="/leaderBord">leader Bord</Link>
        </div>
    )
}

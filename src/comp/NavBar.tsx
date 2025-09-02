import { Link } from "react-router";
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navBar">
            <Link to="/">home</Link>
            <Link to="/game">play game</Link>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
            <Link to="/leaderBord">leaderBord</Link>
    </div>
  )
}

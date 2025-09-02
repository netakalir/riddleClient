import { Link } from "react-router";

export default function Home() {
    return (
        <div>
            home
            <br />
            <Link to="/">home</Link>
            <br />
            <Link to="/game">play game</Link>
            <br />
            <Link to="/register">register</Link>
            <br />
            <Link to="/login">login</Link>
            <br />
            <Link to="/leaderBord">leaderBord</Link>
        </div>
    )
}

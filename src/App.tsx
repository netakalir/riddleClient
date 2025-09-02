import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LeaderBord from "./pages/LeaderBord";
import Game from "./pages/Game";
import "./App.css"

export default function App() {
  return (
    <div className="baseContainer">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/leaderBord" element={<LeaderBord/>}/>
      </Routes>
    </div>
  )
}

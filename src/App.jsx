import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Tournaments from "./components/Tournaments";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/profiles" className={({ isActive }) => (isActive ? "active" : "")}>
          Profiles
        </NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>
          Leaderboard
        </NavLink>
        <NavLink to="/tournaments" className={({ isActive }) => (isActive ? "active" : "")}>
          Tournaments
        </NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/profiles" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </div>
    </Router>
  );
}

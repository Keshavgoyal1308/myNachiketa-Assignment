import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Tournaments from "./components/Tournaments";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/profiles">Profiles</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/tournaments">Tournaments</Link>
      </nav>

      <Routes>
        <Route path="/profiles" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </Router>
  );
}

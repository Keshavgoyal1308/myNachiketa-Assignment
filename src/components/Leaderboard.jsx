import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://lichess.org/api/player/top/10/blitz")
      .then((res) => res.json())
      .then((data) => setPlayers(data.users || []))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Top Blitz Players</h2>
      <div className="grid">
        {players.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.username} {p.title && `(${p.title})`}</h3>
            <p>Rank: {i + 1}</p>
            <p>Rating: {p.perfs.blitz.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

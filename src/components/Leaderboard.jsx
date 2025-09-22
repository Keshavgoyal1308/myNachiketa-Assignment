import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://lichess.org/api/player/top/10/blitz") // Example: Top 10 Blitz
      .then((res) => res.json())
      .then((data) => setPlayers(data.users || []))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top Blitz Players</h2>
      <ul className="space-y-2">
        {players.map((p, i) => (
          <li key={i} className="border p-2 rounded bg-gray-100">
            <p><strong>{p.username}</strong> {p.title && `(${p.title})`}</p>
            <p>Rating: {p.perfs.blitz.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

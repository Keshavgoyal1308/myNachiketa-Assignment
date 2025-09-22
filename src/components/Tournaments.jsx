import { useEffect, useState } from "react";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetch("https://lichess.org/api/tournament")
      .then((res) => res.json())
      .then((data) => setTournaments(data || []))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ongoing Tournaments</h2>
      <ul className="space-y-2">
        {tournaments.map((t, i) => (
          <li key={i} className="border p-2 rounded bg-gray-100">
            <p><strong>{t.fullName}</strong></p>
            <p>Starts at: {new Date(t.startsAt).toLocaleString()}</p>
            <p>Players: {t.nbPlayers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


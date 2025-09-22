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
    <div>
      <h2>Ongoing Tournaments</h2>
      <div className="grid">
        {tournaments.map((t, i) => (
          <div key={i} className="card">
            <h3>{t.fullName}</h3>
            <p>Starts: {new Date(t.startsAt).toLocaleString()}</p>
            <p>Players: {t.nbPlayers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

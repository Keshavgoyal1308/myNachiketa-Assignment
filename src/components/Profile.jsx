import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`https://lichess.org/api/user/${username}`);
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Search Lichess Profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Search</button>

      {profile && (
        <div className="card">
          <h3>{profile.username}</h3>
          {profile.profile?.bio && <p>Bio: {profile.profile.bio}</p>}
          <p>Games Played: {profile.count.all}</p>
          <p>Blitz Rating: {profile.perfs.blitz?.rating}</p>
          <p>Bullet Rating: {profile.perfs.bullet?.rating}</p>
          <p>Classical Rating: {profile.perfs.classical?.rating}</p>
        </div>
      )}
    </div>
  );
}

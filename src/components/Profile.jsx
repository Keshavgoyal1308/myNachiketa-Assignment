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
    <div className="p-4">
      <h2 className="text-xl font-bold">Search Lichess Profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={fetchProfile} className="bg-blue-500 text-white px-3 py-1 rounded">
        Search
      </button>

      {profile && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <h3 className="text-lg font-bold">{profile.username}</h3>
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

import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    axios.get("http://localhost:8000/api/player").then((res) => {
      setPlayers(res.data);

      // setFirstName(res.data[0].firstName);
      // setLastName(res.data[0].lastName);
      // setTeam(res.data[0].team);

      // setPlayers(res.data);
    });
  };

  console.log(players);
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="">Players</h1>
      <button
        className="bg-slate-600 px-2 py-1 rounded text-white"
        onClick={getPlayers}
      >
        Get Players
      </button>

      <div></div>
      {players.map((player, i) => (
        <div key={i}>
          <h1>First: {player.firstName}</h1>
          <h1>Last: {player.lastName}</h1>
          <h1>Team: {player.team}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;

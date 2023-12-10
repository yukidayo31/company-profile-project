import React, { useState, useEffect } from "react";

const FetchTeam = () => {
  const [team, setTeam] = useState([]);

  const fetchTeamData = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=3");
    const team = await resp.json();
    setTeam(team.results);
    console.log(team.results);
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  return (
    <>
      <h1>Team Component</h1>
    </>
  );
};

export default FetchTeam;

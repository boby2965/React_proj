import "./components/images/images";
import "./App.css";
import teamData from "./components/data/iplTeams";
import Cards from "./components/cards/cards";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React from "react";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grid">
        {teamData.map((eachTeam) => (
          <Cards
            key={eachTeam.id}
            name={eachTeam.name}
            source={eachTeam.source}
            wins={eachTeam.wins}
          ></Cards>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

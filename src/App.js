import "./components/images/images";
import "./App.css";
import teamData from "./components/data/iplTeams";
import Cards from "./components/cards/cards";

function App() {
  return (
    <>
      <header></header>
      <div className="grid">
        {teamData.map((eachTeam) => (
          <Cards
            name={eachTeam.name}
            source={eachTeam.source}
            key={eachTeam.id}
          ></Cards>
        ))}
      </div>
      <footer></footer>
    </>
  );
}

export default App;

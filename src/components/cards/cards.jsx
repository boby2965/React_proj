import Images from "../images/images";
import CardTitle from "../headings/cardTitle";
import "./cards.css";

const Cards = (prop) => {
  const { name, source, key, wins } = prop;
  return (
    <div className="card">
      <CardTitle className="team-title" name={name}></CardTitle>
      <Images
        className="team-img"
        key={key}
        source={source}
        alt={name}
      ></Images>
      <div className="card-content">
        <p>Trophies Won: {wins}</p>
        <p>Players: 25</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Cards;

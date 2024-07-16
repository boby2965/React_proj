import CardTitle from "../headings/cardTitle";
import Images from "../images/images";
import Button from "../buttons/button";
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
      </div>
      <Button text="Learn More"></Button>
    </div>
  );
};

export default Cards;

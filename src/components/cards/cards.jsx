import CardTitle from "../headings/cardTitle";
import Images from "../images/images";
import Button from "../buttons/button";
import "./cards.css";

const Cards = (prop) => {
  const { name, source, key, wins } = prop;

  // function Add() {
  //   let val = querySelector("progress-bar").value;
  //   val = val + 1;
  // }

  // function Sub() {
  //   let val = querySelector("progress-bar").value;
  //   val = val - 1;
  // }

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
      <progress className="progress-bar" value={wins} max="30"></progress>
      <div className="button-group">
        {/* <button className="card-button" onClick={Add} id="increase-button">
          +
        </button>
        <button className="card-button" onClick={Sub} id="decrease-button">
          -
        </button>
        <button className="card-button" onClick={Reset} id="reset-button">
          Reset
        </button> */}
      </div>
      <div className="btn">
        <Button text="Learn More"></Button>
      </div>
    </div>
  );
};

export default Cards;

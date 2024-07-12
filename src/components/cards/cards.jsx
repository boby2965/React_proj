import Images from "../images/images";
import CardTitle from "../headings/cardTitle";
import "./cards.css";

const Cards = (prop) => {
  const { name, source, key } = prop;
  return (
    <div className="center">
      <CardTitle name={name}></CardTitle>
      <Images key={key} source={source} alt={name}></Images>
    </div>
  );
};

export default Cards;

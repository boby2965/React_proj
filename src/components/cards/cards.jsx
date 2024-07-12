import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// const Cards = (prop) => {
//   const { name, source, key, wins } = prop;
//   return (
//     <div className="card">
//       <CardTitle className="team-title" name={name}></CardTitle>
//       <Images
//         className="team-img"
//         key={key}
//         source={source}
//         alt={name}
//       ></Images>
//       <div className="card-content">
//         <p>Trophies Won: {wins}</p>
//         <p>Players: 25</p>
//         <button>Learn More</button>
//       </div>
//     </div>
//   );
// };

const Cards = (prop) => {
  const { name, source, wins } = prop;
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Trophies Won: {wins}</p>
          <p>Players: 25</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default Cards;

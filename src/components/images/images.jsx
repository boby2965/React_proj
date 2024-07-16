import "./images.css";

const Images = (prop) => {
  const { name, source, id } = prop;
  return <img className="img" src={source} alt={name} key={id} />;
};

export default Images;

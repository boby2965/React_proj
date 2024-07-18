import "./images.css";

const Images = (prop) => {
  const { name, source, id, width, height } = prop;
  return (
    <img
      className="img"
      width={width}
      height={height}
      src={source}
      alt={name}
      key={id}
    />
  );
};

export default Images;

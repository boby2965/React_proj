const Images = (prop) => {
  const { name, source, key } = prop;
  return <img className="img" src={source} alt={name} key={key} />;
};

export default Images;

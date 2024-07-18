const UnorderedList = ({ list }) => {
  return (
    <ul>
      {list.map((each) => {
        return <li>{each}</li>;
      })}
    </ul>
  );
};

export default UnorderedList;

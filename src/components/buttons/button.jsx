import "./button.css";

const Button = (prop) => {
  return <button onclick={prop.click}>{prop.text}</button>;
};

export default Button;

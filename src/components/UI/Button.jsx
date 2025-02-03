import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={classes.button}>
      {props.title}
    </button>
  );
};

export default Button;

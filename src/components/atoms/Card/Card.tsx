import { CardProps } from "./Card.types";
import classes from "./Card.module.scss";

const Card = ({ children }: CardProps) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;

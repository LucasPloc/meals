import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton openCart={props.openCart} />{" "}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt='Table full of food' />
      </div>
    </>
  );
};

export default Header;

import style from "./AppName.module.css";

function AppName() {
  console.log(style);
  return <h1 className={style.heading}>#TODO App</h1>;
}

export default AppName;

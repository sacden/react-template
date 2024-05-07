import "./styles.css";
import IMAGE from "./log.png";
import LOGO from "./logo.svg";

export const App = () => {
  return (
    <>
      <h1>React Template</h1>
      <img src={IMAGE} alt="logo" width="100" height="100" />
      <img src={LOGO} alt="logo" width="100" height="100" />
    </>
  );
};

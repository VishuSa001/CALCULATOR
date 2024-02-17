import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const calculate = (calVal) => {};

  const [calVal, setCalVal] = useState("");
  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      console.log("result", result);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  console.log("calVal", calVal);
  console.log(typeof calVal);

  return (
    <>
      <h1>Calculator</h1>

      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onClickButton={onClickButton}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;

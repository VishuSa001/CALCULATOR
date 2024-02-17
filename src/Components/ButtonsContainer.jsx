import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onClickButton }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onClickButton(buttonName)}
        >
          {buttonName}
        </button>
      ))}

      <button onClick={buttonNames}>Add</button>
    </div>
  );
};

export default ButtonsContainer;

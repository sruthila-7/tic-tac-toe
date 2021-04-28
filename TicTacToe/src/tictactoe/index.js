import React, {useState} from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import Button from "../button";
import "./index.css";
const TicTacToe = (props) => {
const [buttonLabels, setButtonLabels] = useState(
    [
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
]);
const [activePlayer, setActivePlayer] = useState("X");
const [score, setScore] = useState({X:0, O:0, DRAW:0});
const handleClick = (val, buttonIndex) => {
    const newButtonLabels = buttonLabels.map((label, index) => {
      if (buttonIndex === index) {
        return activePlayer;
      } else {
          return label;
      }
    });
    setButtonLabels(newButtonLabels);
    if (
      (newButtonLabels[0] === "X" &&
       newButtonLabels[1] === "X" &&
       newButtonLabels[2] === "X") ||
      (newButtonLabels[0] === "X" &&
       newButtonLabels[3] === "X" &&
       newButtonLabels[6] === "X") ||
      (newButtonLabels[0] === "X" &&
       newButtonLabels[4] === "X" &&
       newButtonLabels[8] === "X") ||
      (newButtonLabels[1] === "X" &&
       newButtonLabels[4] === "X" &&
       newButtonLabels[7] === "X") ||
      (newButtonLabels[2] === "X" &&
       newButtonLabels[5] === "X" &&
       newButtonLabels[8] === "X") ||
      (newButtonLabels[3] === "X" &&
       newButtonLabels[4] === "X" &&
       newButtonLabels[5] === "X") ||
      (newButtonLabels[6] === "X" &&
       newButtonLabels[7] === "X" &&
       newButtonLabels[8] === "X") ||
      (newButtonLabels[2] === "X" &&
       newButtonLabels[4] === "X" &&
       newButtonLabels[6] === "X")
    ) {
        console.log("X Won.");
        let xWins = score.X;
        setScore({ ...score, X: xWins + 1 });
        restartGame();
    } else if (
      (newButtonLabels[0] === "O" &&
       newButtonLabels[1] === "O" &&
       newButtonLabels[2] === "O") ||
      (newButtonLabels[0] === "O" &&
       newButtonLabels[3] === "O" &&
       newButtonLabels[6] === "O") ||
      (newButtonLabels[0] === "O" &&
       newButtonLabels[4] === "O" &&
       newButtonLabels[8] === "O") ||
      (newButtonLabels[1] === "O" &&
       newButtonLabels[4] === "O" &&
       newButtonLabels[7] === "O") ||
      (newButtonLabels[2] === "O" &&
       newButtonLabels[5] === "O" &&
       newButtonLabels[8] === "O") ||
      (newButtonLabels[3] === "O" &&
       newButtonLabels[4] === "O" &&
       newButtonLabels[5] === "O") ||
      (newButtonLabels[6] === "O" &&
       newButtonLabels[7] === "O" &&
       newButtonLabels[8] === "O") ||
      (newButtonLabels[2] === "O" &&
       newButtonLabels[4] === "O" &&
       newButtonLabels[6] === "O")
    ) {
      console.log("O Won.");
      let oWins = score.O;
        setScore({ ...score, O: oWins + 1 });
        restartGame();
    } else {
        const markArray = newButtonLabels.filter((val) => {
          return val === "?";
        });
        if(markArray.length === 0)
        {
         let draws = score.DRAW;
        setScore({ ...score, DRAW: draws + 1 })
        restartGame();
        }
    }
  changePlayer();
};
const changePlayer = () => {
    if(activePlayer === "X")
    {
        setActivePlayer("O")
    } else {
        setActivePlayer("X");
    }
};

const restartGame = () => {
  setButtonLabels(  ["?","?","?","?","?","?","?","?","?"]);
  setActivePlayer("X");
};
    return (
        <div id="head" style={styles.root}>
            <div style={styles.gameContainer}>
                <p id="Game"><ins>Game</ins></p>
                {buttonLabels.map((label, index) => {
                  return (
                    <span key={index}>
                       {index % 3 === 0 ? <br /> : null}
                       <Button
                       onClick={handleClick}
                       style={{fontSize: 15,
                        color: "azure",
                        padding: 20,
                        margin: 5,
                        backgroundColor: "cadetblue",
                        borderRadius: 7,
                        border: "solid",
                        }}
                       label={label}
                       index={index}
                       />
                    </span> 
                  );
                })}
                <div><Button style={{borderRadius: 7, color: "azure", padding: 15, backgroundColor: "#191970"}}label="Restart" onClick={restartGame} /></div>
            </div>
            <div style={styles.scoreContainer}>
                <p id="Game"><ins>Score Board</ins></p>
                <div style={styles.scoreCard} >
                    <div style={styles.flex1}>
                        <p id="table"><ins>X</ins></p>
                        <p style={styles.score}>{score.X}</p>
                    </div>
                    <div style={styles.flex1}>
                        <p id="table"><ins>O</ins></p>
                        <p style={styles.score}>{score.O}</p>
                    </div>
                    <div style={styles.flex1}>
                        <p id="table"><ins>DRAW</ins></p>
                        <p style={styles.score}>{score.DRAW}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    root: {
        display: "flex",
    },
    gameContainer: {
        flex: 1,
    },
    scoreContainer: {
        flex: 1,
    },
    scoreCard: {
        display: "flex",
    },
    flex1: {
        flex: 1,
    },
    score: {
        color: "blue",
    },
};

export default TicTacToe;
// CSS
import "./App.css";

// REACT
import { useCallback, useEffect, useState } from "react";

// DADOS
import { wordsList } from "./data/words";

// COMPONENTS
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    // escolhendo categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // escolhendo palavra aleatoria
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // iniciando o jogo
  const startGame = () => {
    // escolhendo uma palavra e uma categoria
    const { word, category } = pickWordAndCategory();

    // criando array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // "setando" os estagios
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // processando a entrada de letras
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // reiniciando o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </>
  );
}

export default App;

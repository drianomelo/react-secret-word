import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <header className="game__header">
        <span className="game__points">Pontuação: {}</span>
        <h1>Advinhe a palavra:</h1>
        <p className="game__tip">Dica: {}</p>
        <span>Você ainda tem {} tentativa(s).</span>
      </header>
      <main className="game__word">
        <div className="game__letter"></div>
      </main>
      <footer className="game__footer">
        <span>Tente adivinhar uma letra da palavra:</span>
        <div className="game__group">
          <input type="text" />
          <button>JOGAR</button>
        </div>
        <span>Letras já utilizadas: {}</span>
      </footer>
    </div>
  );
};

export default Game;

import { useState } from "react";
import { Container, GameOver, Game, DataUser } from "../src/components";

function App() {
  const [gameOver, setIsGameOver] = useState(false);
  const [showModal, setShowModal] = useState(true);

  return (
    <Container>
      <DataUser />
      {!gameOver ? (
        <Game setIsGameOver={setIsGameOver} />
      ) : (
        <GameOver setIsGameOver={setIsGameOver} />
      )}
    </Container>
  );
}

export default App;

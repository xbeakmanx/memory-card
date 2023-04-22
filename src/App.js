import { useState } from "react";
import { Container, GameOver, DataUser } from "../src/components";
import Game from "./pages/Game";

function App() {
  const [data, setData] = useState({
    gameOver: false,
    answers: [],
    badAnswers: 0,
  });
  return (
    <Container>
      <DataUser />
      {!data.gameOver ? (
        <Game setData={setData} />
      ) : (
        <GameOver data={data} setData={setData} />
      )}
    </Container>
  );
}

export default App;

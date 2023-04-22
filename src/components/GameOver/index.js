import { Box, Button, Star, Title } from "..";

export default function GameOver({ data, setData }) {
  return (
    <>
      <Box className={"gameOver"}>
        <Title className={"gameOver__title"}>Level complete!</Title>
        <div className="gameOver__rating">
          <Star />
          <Star />
          <Star src={data.badAnswers >= 20 ? "empty_star.png" : null} />
        </div>
        <Box className="gameOver__answers">
          <Title className="gameOver__text-answers">
            Correct: {data.answers} / Mistakes: {data.badAnswers}
          </Title>
        </Box>
        <Button
          onClick={() => {
            setData({
              gameOver: false,
              answers: [],
              badAnswers: 0,
            });
          }}
        >
          Start again
        </Button>
      </Box>
    </>
  );
}

import { Card, Grid, Title, Loader } from "../../../src/components";
import { useFetch } from "../../hooks/useFetch";
import { useOnClickCard } from "../../hooks/useOnClickCard";
import { shuffleArray } from "../../services/shuffleArray";

export default function Game({ setData }) {
  const { data: images, isFetching } = useFetch(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=6",
    shuffleArray
  );
  const data = useOnClickCard({ total: images.length });
  const {
    badAnswers,
    cardOpen,
    collectAnswers,
    isLoading,
    onClick,
    setIsLoading,
  } = data;
  return (
    <div className="game">
      <Title>
        Correct: {collectAnswers.length} - Mistakes: {badAnswers}
      </Title>
      {isFetching ? (
        <Loader />
      ) : images.length === 0 ? (
        <Title className="lg:text-xl mt-5">
          Hubo un error al consultar los datos, por favor intente mas tarde.
        </Title>
      ) : (
        <Grid>
          {images.map((el, index) => (
            <Card
              cardOpen={cardOpen}
              clickCard={onClick}
              key={index}
              index={index + 1}
              image={el.fields.image.url}
              alt={el.fields.image.title}
              uuid={el.fields.image.uuid}
              collectAnswers={collectAnswers}
              isLoading={isLoading}
              setData={setData}
              setIsLoading={setIsLoading}
            />
          ))}
        </Grid>
      )}
    </div>
  );
}

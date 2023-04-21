import { useState } from "react";
import { Card, Grid, Container, Title, Loader } from "../../../src/components";
import { useFetch } from "../../hooks/useFetch";
import { useOnClickCard } from "../../hooks/useOnClickCard";

export default function Game(props) {
  const { data: images, isFetching } = useFetch();

  const { setIsGameOver } = props;
  const data = useOnClickCard();
  const { badAnswers, cardOpen, collectAnswers, isLoading, onClick } = data;
  return (
    <Container>
      <Title>
        Aciertos: {collectAnswers.length} - Errores: {badAnswers}
      </Title>
      <Grid>
        {isFetching ? (
          <Loader />
        ) : (
          images.map((el, index) => (
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
              setIsGameOver={setIsGameOver}
            />
          ))
        )}
      </Grid>
    </Container>
  );
}

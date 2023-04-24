export default function Card({
  image,
  alt,
  clickCard,
  index,
  cardOpen,
  uuid,
  collectAnswers,
  isLoading,
  setData,
  setIsLoading,
}) {
  const isSelected = cardOpen.some((el) => el.id === index);
  const isCorrect = collectAnswers.some((el) => el.id === uuid);
  return (
    <>
      <div
        onClick={
          isLoading || isCorrect
            ? () => setIsLoading(false)
            : () => clickCard(index, isSelected, uuid, setData)
        }
        className={`card ${
          isLoading && isSelected && !isCorrect
            ? "card--shake"
            : isCorrect
            ? "card--wave"
            : "card--hover"
        }`}
      >
        {isSelected || isCorrect ? (
          <img src={image} alt={alt} className="card__image" />
        ) : null}
      </div>
    </>
  );
}

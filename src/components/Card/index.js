export default function Card(props) {
  const {
    image,
    alt,
    clickCard,
    index,
    cardOpen,
    uuid,
    collectAnswers,
    isLoading,
    setIsGameOver,
  } = props;
  const isSelected = cardOpen.some((el) => el.id === index);
  const isCorrect = collectAnswers.some((el) => el.id === uuid);
  return (
    <div
      onClick={
        isLoading
          ? () => {}
          : () => clickCard(index, isSelected, uuid, setIsGameOver)
      }
      className={`${
        isLoading ? "bg-slate-650" : ""
      } min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-600 lg:aspect-none group-hover:opacity-75  lg:h-80`}
    >
      {isSelected || isCorrect ? (
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      ) : (
        <div className="flex justify-center h-full items-center text-8xl text-white">
          ?
        </div>
      )}
    </div>
  );
}

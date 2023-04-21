import { useState } from "react";

export function useOnClickCard() {
  const [cardOpen, setCardOpen] = useState([]);
  const [collectAnswers, setCollectAnswers] = useState([]);
  const [badAnswers, setBadAnswers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(id, isSelected, uuid, setIsGameOver) {
    if (isSelected) return alert("Seleccione otra carta diferente");
    let arrayAnswers;

    if (cardOpen.length >= 1) {
      setIsLoading(true);
      setCardOpen([...cardOpen, { id: id }]);
      const ifAlready = collectAnswers.filter((el) => el.id === id);
      if (ifAlready.length === 0 && cardOpen[0].uuid === uuid) {
        setCollectAnswers([...collectAnswers, { id: uuid }]);
        arrayAnswers = [...collectAnswers, { id: uuid }];
      } else {
        setBadAnswers(badAnswers + 1);
      }
      setTimeout(() => {
        setCardOpen([]);
        setIsLoading(false);
        if (arrayAnswers?.length === 10) {
          setIsGameOver(true);
        }
      }, 500);
    } else {
      setCardOpen([...cardOpen, { id: id, uuid: uuid }]);
    }
  }

  const inputProps = {
    cardOpen: cardOpen,
    collectAnswers: collectAnswers,
    badAnswers: badAnswers,
    isLoading: isLoading,
    onClick: handleClick,
  };

  return inputProps;
}

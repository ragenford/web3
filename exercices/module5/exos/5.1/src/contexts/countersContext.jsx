import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  // init les useState de chaque bouton
  const [counterGood, setCounterGood] = useState(0);
  const [counterOk, setCounterOk] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  // fonction de changemnt de valuer
  const increaseGood = () => {
    setCounterGood(counterGood + 1);
  };
  const increaseOk = () => {
    setCounterOk(counterOk + 1);
  };
  const increaseBad = () => {
    setCounterBad(counterBad + 1);
  };

  const resetAll = () => {
    setCounterGood(0);
    setCounterOk(0);
    setCounterBad(0);
  };

  // pour + de clarte on regroupe dans un objet les values qu'on souhaite exposer aux consumer du context
  const exposedValue = {
    counterGood,
    counterOk,
    counterBad,
    increaseGood,
    increaseOk,
    increaseBad,
    resetAll,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };

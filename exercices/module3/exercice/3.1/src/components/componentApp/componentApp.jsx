import { useState } from "react";
import Display from "components/componentDisplay/componentDisplay";
import Button from "components/componentButton/componentButton";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good + neutral + bad) / 3;
  const positive = ((neutral + bad - good) / 100) * good;

  return (
    <div>
      <h1>
        <Display aAfficher="give feedback" />
      </h1>
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <h1>
        <Display aAfficher="statistics" />
      </h1>
      <Display aAfficher={`good ${good}`} />
      <Display aAfficher={`neutral ${neutral}`} />
      <Display aAfficher={`bad ${bad}`} />
      <Display aAfficher={`all ${all}`} />
      <Display aAfficher={` average ${average}`} />
      <Display aAfficher={`positive ${positive}`} />
    </div>
  );
};

/*
  Dans cette ligne de code, nous utilisons des backticks (``) pour créer
      une chaîne de caractères avec une interpolation de chaîne. Cela nous
      permet d'inclure le texte "good" suivi de la valeur de l'objet good dans
      la chaîne. La notation $ {good} est utilisée pour insérer la valeur de
      good à l'intérieur de la chaîne. */

export default App;

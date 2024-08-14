import { useState } from "react";

import { Header, Button } from "./Components";

import { Statistics } from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const allScores = [good, neutral, bad];
  const sumOfScores = allScores.reduce((a, b) => a + b, 0);
  const averageOfScores = sumOfScores / allScores.length;
  const positivePercentage = sumOfScores > 0 ? (good / sumOfScores) * 100 : 0;

  return (
    <>
      <Header title="give feedback" />

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header title="statistics" />

      {sumOfScores > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          sumOfScores={sumOfScores}
          averageOfScores={averageOfScores}
          positivePercentage={positivePercentage}
        />
      ) : (
        "No feedback given"
      )}
    </>
  );
};

export default App;

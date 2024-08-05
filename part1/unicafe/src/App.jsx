import { useState } from "react";

import { Header, Button, FeedbackCount } from "./Components";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header title="give feedback" />

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header title="statistics" />

      <FeedbackCount feedback="good" count={good} />
      <FeedbackCount feedback="neutral" count={neutral} />
      <FeedbackCount feedback="bad" count={bad} />
    </div>
  );
};

export default App;

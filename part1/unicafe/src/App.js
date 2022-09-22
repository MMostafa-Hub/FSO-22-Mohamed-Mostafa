import React, { useState } from "react";

// Button Component
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
// headline Component
const Headline = ({ text }) => {
  return <h1>{text}</h1>;
};
// statistic Component
const Stat = ({ variable, value }) => {
  return (
    <p>
      {variable} {value}
    </p>
  );
};
export default function App() {
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  let totalFeedbacks = goodCounter + neutralCounter + badCounter;
  const calculateAverageFeedback = (
    goodCounter,
    badCounter,
    totalFeedbacks
  ) => {
    return (goodCounter + badCounter * -1) / totalFeedbacks;
  };

  const incrementGoodCounter = () => {
    setGoodCounter(goodCounter + 1);
  };
  const incrementNeutralCounter = () => {
    setNeutralCounter(neutralCounter + 1);
  };
  const incrementBadCounter = () => {
    setBadCounter(badCounter + 1);
  };
  const calculatePositivePercentage = (goodCounter, totalFeedbacks) => {
    return String(100 * (goodCounter / totalFeedbacks)) + "%";
  };

  return (
    <>
      <Headline text="give feedback" />
      <Button onClick={incrementGoodCounter} text="good" />
      <Button onClick={incrementNeutralCounter} text="neutral" />
      <Button onClick={incrementBadCounter} text="bad" />

      <Headline text="statistics" />

      <Stat variable="good" value={goodCounter} />
      <Stat variable="neutral" value={neutralCounter} />
      <Stat variable="bad" value={badCounter} />
      <Stat variable="all" value={totalFeedbacks} />
      <Stat
        variable="average"
        value={calculateAverageFeedback(
          goodCounter,
          badCounter,
          totalFeedbacks
        )}
      />
      <Stat
        variable="positive"
        value={calculatePositivePercentage(goodCounter, totalFeedbacks)}
      />
    </>
  );
}

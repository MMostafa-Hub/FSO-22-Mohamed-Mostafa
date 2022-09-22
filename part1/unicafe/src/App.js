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
const ShowStatistics = ({ goodCounter, neutralCounter, badCounter }) => {
  let totalFeedbacks = goodCounter + neutralCounter + badCounter;
  // calculates the average feedback base on these weights
  // (good: 1, neutral: 0, bad: -1)
  const calculateAverageFeedback = (
    goodCounter,
    badCounter,
    totalFeedbacks
  ) => {
    return (goodCounter + badCounter * -1) / totalFeedbacks;
  };

  // returns a string representation of the percentage of the good feedback
  const calculatePositivePercentage = (goodCounter, totalFeedbacks) => {
    return String(100 * (goodCounter / totalFeedbacks)) + "%";
  };
  // shows the feedback only if there's a feedback available
  if (totalFeedbacks) {
    return (
      <>
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
  return <p>No feedback Given</p>;
};
export default function App() {
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const incrementGoodCounter = () => {
    setGoodCounter(goodCounter + 1);
  };
  const incrementNeutralCounter = () => {
    setNeutralCounter(neutralCounter + 1);
  };
  const incrementBadCounter = () => {
    setBadCounter(badCounter + 1);
  };
  return (
    <>
      <Headline text="give feedback" />
      <Button onClick={incrementGoodCounter} text="good" />
      <Button onClick={incrementNeutralCounter} text="neutral" />
      <Button onClick={incrementBadCounter} text="bad" />
      <Headline text="statistics" />
      <ShowStatistics
        goodCounter={goodCounter}
        neutralCounter={neutralCounter}
        badCounter={badCounter}
      />
    </>
  );
}

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
const Statistic = ({ variable, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{variable}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
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
        <Statistic variable="good" value={goodCounter} />
        <Statistic variable="neutral" value={neutralCounter} />
        <Statistic variable="bad" value={badCounter} />
        <Statistic variable="all" value={totalFeedbacks} />
        <Statistic
          variable="average"
          value={calculateAverageFeedback(
            goodCounter,
            badCounter,
            totalFeedbacks
          )}
        />
        <Statistic
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

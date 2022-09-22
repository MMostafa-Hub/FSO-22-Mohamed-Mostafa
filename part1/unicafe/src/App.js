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
  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  // increment feedback based on the type of feedback
  // const increment = (type) => () => {
  //   switch (type) {
  //     case "good":
  //       setFeedback({ ...feedback, good: feedback.good + 1 });
  //       break;
  //     case "neutral":
  //       setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  //       break;
  //     case "bad":
  //       setFeedback({ ...feedback, bad: feedback.bad + 1 });
  //       break;
  //   }
  // };
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

      <Stat variable="good" value={goodCounter} />
      <Stat variable="neutral" value={neutralCounter} />
      <Stat variable="bad" value={badCounter} />
    </>
  );
}

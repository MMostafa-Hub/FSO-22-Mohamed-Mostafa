import React, { useState } from "react";
// Button Component
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
export default function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [anecdoteIndex, setAnecdoteIndex] = useState(0);
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);

  const incrementVoteOf = (anecdoteIndex) => () => {
    // must do this to take a copy of the values not the reference of the original array
    const newVotes = [...votes];
    newVotes[anecdoteIndex]++;

    // updates the maxVotesIndex if the increment vote is bigger
    if (newVotes[anecdoteIndex] > newVotes[maxVotesIndex]) {
      setMaxVotesIndex(anecdoteIndex);
    }
    setVotes(newVotes);
  };

  const incrementAnecdoteIndex = () => {
    setAnecdoteIndex((anecdoteIndex + 1) % anecdotes.length);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[anecdoteIndex]}</p>
      <p>has {votes[anecdoteIndex]} votes</p>
      <Button onClick={incrementVoteOf(anecdoteIndex)} text="vote" />
      <Button onClick={incrementAnecdoteIndex} text="next anecdote" />

      <h1> Anecdote with most votes</h1>
      <p>{anecdotes[maxVotesIndex]}</p>
    </>
  );
}

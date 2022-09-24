// takes care of rendering the name of the Part
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
// takes care of rendering the name of the course
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
// renders the parts and their number of exercises
const Content = (props) => {
  return (
    <div>
      <Part part={props.courseParts[0]} />
      <Part part={props.courseParts[1]} />
      <Part part={props.courseParts[2]} />
    </div>
  );
};
// renders the total number of exercises
const Total = (props) => {
  let total_nums_of_exercises =
    props.courseParts[0].exercises +
    props.courseParts[1].exercises +
    props.courseParts[2].exercises;
  return <p>total number of exercises: {total_nums_of_exercises}</p>;
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  );
};

export default App;

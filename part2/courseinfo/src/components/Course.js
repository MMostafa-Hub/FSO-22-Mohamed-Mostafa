import React from "react";

// takes care of rendering the title of the course
const Title = ({ courseTitle }) => {
  return <h1>{courseTitle}</h1>;
};

// takes care of rendering the name of the Part
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// renders the parts and their number of exercises
const Content = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((coursePart, index) => (
        <Part key={index} part={coursePart} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Title courseTitle={course.name} />
      <Content courseParts={course.parts} />
    </>
  );
};

export default Course;

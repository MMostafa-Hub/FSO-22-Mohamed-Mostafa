import React from "react";

// takes care of rendering the title of the course
const Title = ({ courseTitle }) => <h1>{courseTitle}</h1>;

// takes care of rendering the name and the number of exercises of the Part
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

// renders all the parts and their number of exercises
const Content = ({ courseParts }) => (
  <div>
    {courseParts.map((coursePart, index) => (
      <Part key={index} part={coursePart} />
    ))}
  </div>
);

const TotalNumberOfExercises = ({ courseParts }) => (
  <>
    <p style={{ fontWeight: "bold" }}>
      total of {courseParts.reduce((sum, x) => sum + x.exercises, 0)} exercises
    </p>
  </>
);
const Course = ({ course }) => (
  <>
    <Title courseTitle={course.name} />
    <Content courseParts={course.parts} />
    <TotalNumberOfExercises courseParts={course.parts} />
  </>
);

export default Course;

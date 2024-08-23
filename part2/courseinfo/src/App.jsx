import { Course } from "./components/Course";
import { courses } from "./data";

const App = () => {
  return (
    <>
      <h1>Web development curriculum</h1>

      {courses.map(({ id, name, parts }) => {
        const totalExercises = parts.reduce(
          (acc, part) => acc + part.exercises,
          0
        );

        return (
          <Course
            key={id}
            parts={parts}
            name={name}
            totalExercises={totalExercises}
          />
        );
      })}
    </>
  );
};

export default App;

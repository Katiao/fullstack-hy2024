import { Header, Content, Total } from "./components";

export const Course = ({ name, parts, totalExercises }) => {
  return (
    <>
      <Header courseTitle={name} />
      <Content courseParts={parts} />
      <Total totalExercises={totalExercises} />
    </>
  );
};

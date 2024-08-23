import { Header, Content, Total } from "./components";

import { COURSE, TOTAL_EXERCISES } from "./consts";

export const Course = () => {
  return (
    <>
      <Header courseTitle={COURSE.name} />
      <Content courseParts={COURSE.parts} />
      <Total totalExercises={TOTAL_EXERCISES} />
    </>
  );
};

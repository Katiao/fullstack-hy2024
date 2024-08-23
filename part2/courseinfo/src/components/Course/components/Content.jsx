export const Content = ({ courseParts }) => (
  <>
    {courseParts.map(({ name, exercises, id }) => (
      <p key={id}>
        {name} {exercises}
      </p>
    ))}
  </>
);

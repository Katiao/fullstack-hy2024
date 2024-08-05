export const Content = ({ courseParts }) => {
    
    return (
      <div>
        {courseParts.map((part, index) => (
          <p key={index}>
            {part.title} {part.numberOfExercises}
          </p>
        ))}
      </div>
    );
  };
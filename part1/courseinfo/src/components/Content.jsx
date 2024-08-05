export const Content = ({ courseParts }) => {
    
    return (
      <div>
        {courseParts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    );
  };
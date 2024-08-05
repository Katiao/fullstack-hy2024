export const COURSE = {
name: 'Half Stack application development',
parts: [{name: 'Fundamentals of React', exercises: 10}, {name: 'Using props to pass data', exercises: 7}, {name: 'State of a component', exercises: 14}]

} 

export const TOTAL_EXERCISES = COURSE.parts.reduce((sum, part) => sum + part.exercises, 0);
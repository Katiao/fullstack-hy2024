export const COURSE = 'Half Stack application development'

export const COURSE_PARTS = [{title: 'Fundamentals of React', numberOfExercises: 10}, {title: 'Using props to pass data', numberOfExercises: 7}, {title: 'State of a component', numberOfExercises: 14}]
 
export const TOTAL_EXERCISES = COURSE_PARTS.reduce((sum, part) => sum + part.numberOfExercises, 0);
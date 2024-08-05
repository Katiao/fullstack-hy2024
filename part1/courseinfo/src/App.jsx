import { Header, Content, Total } from "./components"
import { COURSE, COURSE_PARTS, TOTAL_EXERCISES } from "./consts"

const App = () => {

  return (
    <div>
     <Header courseTitle={COURSE} />
     <Content courseParts={COURSE_PARTS}/>
     <Total totalExercises={TOTAL_EXERCISES} />
    </div>
  )
}

export default App
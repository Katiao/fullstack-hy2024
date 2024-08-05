import { Header, Content, Total } from "./components"
import { COURSE, TOTAL_EXERCISES } from "./consts"

const App = () => {

  return (
    <div>
     <Header courseTitle={COURSE.name} />
     <Content courseParts={COURSE.parts}/>
     <Total totalExercises={TOTAL_EXERCISES} />
    </div>
  )
}

export default App
import Assessment from "./Assessment"
import {jsQuizz} from "./constants.json"
function App() {
    return <Assessment questions={jsQuizz.questions} />
}

export default App

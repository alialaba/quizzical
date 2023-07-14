import { useState } from 'react'
import StartScreen from './components/StartScreen';
import QuestionsScreen from './components/QuestionsScreen';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'



function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz =()=>{
    setStartQuiz(prevState => !prevState)
  }

  return (
    <main>
      {!startQuiz ?  <StartScreen startQuiz={handleStartQuiz}/> : <QuestionsScreen/>}
      {/* 
       */}
    </main>
  )
}

export default App

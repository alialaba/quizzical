import { useState, useEffect} from 'react'
import StartScreen from './components/StartScreen';
import QuestionsScreen from './components/QuestionsScreen';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';



function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(()=>{
// Make a request for a user with a given ID
axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])

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

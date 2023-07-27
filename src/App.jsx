import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from "axios";
import { nanoid } from "nanoid"

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizs, setQuizs] = useState(null);
  const [score, setScore] = useState(0);
  
  


  const handleStartQuiz = () => {
    setStartQuiz((prevState) => !prevState);
  };

  //shuffle answers 
  const shuffleAnswers = (answers)=>{
    let shuffledAnswers = [...answers];
    for(let i = shuffledAnswers.length - 1; i > 0; i--){

      let j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j],shuffledAnswers[i]]

    }
    return shuffledAnswers;

  }

  //handle Api call
  const getQuizs = async () => {
    // Make a get request
    try {
      setLoading(true);
      let response = await axios.get(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
      );
      console.log(response.data.results);
      setQuizs(response.data.results.map(ques=>{
        console.log(ques)
      }));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
 
    
  };

  useEffect(() => {
    getQuizs();
  }, []);

  return (
    <main>
      {!startQuiz ? 
        (<StartScreen startQuiz={handleStartQuiz} />)
      : 
        (<QuestionsScreen quizs={quizs} shuffledAnswers={shuffleAnswers} />
)      }
      
    </main>
  );
}

export default App;

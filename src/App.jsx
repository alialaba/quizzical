import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";
import axios from "axios";
import { nanoid } from "nanoid" ;

function App() {
  const [error, setError] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [hasCheckedAnswers, setHasCheckedAnswers] = useState(false);
  
  
// handle start quiz
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

   try {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple");
    const data = await response.json();
    setQuizData(data.results.map((item) => {
      return {
          id: nanoid(), // Make sure nanoid() is defined
          question: item.question,
          correctAnswer: item.correct_answer,
          answers: shuffleAnswers([...item.incorrect_answers, item.correct_answer]).map((answer)=>({
            id:nanoid(5),
            answer: answer,
            isHeld:false

          })), // Make sure shuffleAnswers() is defined
          score:0,
          
        };
  }));
   } catch (error) {
    setError(error.message);
   }


  };

  useEffect(() => {
    getQuizs();
    
  }, [startQuiz]);

  return (
    <main>
      {!startQuiz ? 
        (<StartScreen startQuiz={handleStartQuiz} />)
      : 
        (<QuestionsScreen  
          quizData={quizData}
          key={nanoid()} 
          setQuizData={setQuizData}
            />
)      }
      
    </main>
  );
}

export default App;

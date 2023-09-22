import { useState, useEffect } from "react";

import axios from "axios";
import { nanoid } from "nanoid" ;
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

function App() {

  const [startGame, setStartGame] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [stage, setStage] = useState("");
 
  

  //shuffle (incorrect_answers and correct_answer)
  const shuffleAnswers =(answers)=>{
    let shuffledAnswers = [...answers];
    for(let i = shuffledAnswers.length - 1; i > 0 ; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] =  [shuffledAnswers[j], shuffledAnswers[i]]
    }

    return shuffledAnswers
  }


  //startGame func
  const getStarted = ()=>{
    setStartGame(!startGame)
  }


  //Fetch Api
  const getQuizData = async ()=>{
    try {
      setStage("loading");
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple");
      const data = await res.json();
      console.log(data);
      setQuizData(data.results.map((item)=>{
        return{
          id:nanoid(),
          question: item.question,
          correctAnswer: item.correct_answer,
          answers: shuffleAnswers([...item.incorrect_answers, item.correct_answer]).map((answer)=>({
            id:nanoid(5),
            isHeld: false,
            value: answer

          }))
        }
      }))

      setStage("done")
      
    } catch (error) {
      
      console.log(error)
    }
  }

  useEffect(()=>{

if(startGame){
  getQuizData()
}

  }, [startGame])

  switch(stage){
      case "loading":
        return (<h3>Loading...</h3>);
        case "done":
        return (<QuizScreen quizData={quizData} setQuizData={setQuizData}/>);  
        default:
      return(<StartScreen getStarted={getStarted}/>);
   
  }

}

export default App;

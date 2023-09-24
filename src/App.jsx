import { useState, useEffect } from "react";

import axios from "axios";
import { nanoid } from "nanoid" ;
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

function App() {

  const [startGame, setStartGame] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [stage, setStage] = useState("");
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false);
  const [score, setScore] = useState(0);
 
  


  //play again
  const playAgain = ()=>{
    setStartGame(false);
    setStage("");
    setHasCheckedAnswer(false);
    setScore(0);
  }



  //functiom to Held answer
  const heldAnswer = (answerId, questionId)=>{
    setQuizData(prevData=>
       prevData.map((item)=>{
        if(item.id === questionId){
          const newAnswerArr = item.answers.map((answer)=>{
            if(answer.id === answerId){
              return{
                ...answer,
                isHeld: true
              }
            }else{
              return{
                ...answer,
                isHeld: false
              }
            }

          })

          //update the item answers array
          return{
            ...item,
            answers: newAnswerArr
          }
        }else{
          return item;
        }
       })
      )
  }


  //function check answer 
  const checkAnswer =()=>{
    
     const updatedData = quizData.map((item)=>{
        const checkedAnswer = item.answers.map((answer)=>{
          //check the held answer is correct
          if(answer.isHeld && item.correctAnswer  === answer.value){
            //increase the score  by 1
            setScore((prevScore)=> prevScore + 1);
            return{
              ...answer,
              isCorrect: true
            }
            //check the held answer is incorrect 
          }else if(answer.isHeld && item.correctAnswer !== answer.value){
            return{
              ...answer,
              isWrong: true
            }
            //check the held answer is false but is the  correct answer
          }else if(!answer.isHeld && item.correctAnswer === answer.value ){
            return{
              ...answer,
              isCorrect: true
            }
          }else{
            return{
              ...answer,
              isFaded: true
            }
          }
        })
      //do some update here
        return{
          ...item,
         answers: checkedAnswer
        }
     
      })

      setHasCheckedAnswer(true);
      setQuizData(updatedData)
  }

  //shuffle (incorrect_answers and correct_answer)
  const shuffleAnswers =(answers)=>{
    let shuffledAnswers = [...answers];
    for(let i = shuffledAnswers.length - 1; i > 0 ; i--){
      let j = Math.floor(Math.random() * (i + 1));
      //interchange the answers randomly
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
        return (<div className="card"><h3>Loading...</h3></div>);
        case "done":
        return (<QuizScreen 
          quizData={quizData}
          hasCheckedAnswer={hasCheckedAnswer}
          score={score}
          setQuizData={setQuizData}
          heldAnswer={heldAnswer}
          checkAnswer={checkAnswer}
          setHasCheckedAnswer={setHasCheckedAnswer}
          playAgain={playAgain}
           />);  
        default:
      return(<StartScreen getStarted={getStarted}/>);
   
  }

}

export default App;

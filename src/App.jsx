import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import QuestionsScreen from "./components/QuestionsScreen";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from "axios";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizs, setQuizs] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("helo");


  const handleStartQuiz = () => {
    setStartQuiz((prevState) => !prevState);
  };

  //handle Api call
  const getQuizs = async () => {
       // Make a get request
    try {
      setLoading(true);
      let response = await axios.get(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
      );
      console.log(response.data.results);
      setQuizs(response.data.results);

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
        (<QuestionsScreen quizs={quizs} />
)      }
      
    </main>
  );
}

export default App;

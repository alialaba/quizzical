import Quiz from "./Quiz"
export default function QuizScreen(props){

    const showQuizQuestions = props.quizData.map((item)=>(
        <Quiz
        key={item.id}
        questionId={item.id}
        question={item.question}
        answers={item.answers}
        heldAnswer={props.heldAnswer}

        
        />
    ))
    return(
        <div className="card">
           {showQuizQuestions}
           <div className="card__bottom">
            <button className="card__btn" onClick={()=> props.checkAnswer()}>Check answers</button>

           </div>
        </div>
    );
}
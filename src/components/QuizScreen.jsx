import Quiz from "./Quiz"
export default function QuizScreen(props){

    const showQuizQuestions = props.quizData.map((item)=>(
        <Quiz
        key={item.id}
        questionId={item.id}
        question={item.question}
        answers={item.answers}
        heldAnswer={props.heldAnswer}
        playAgain={props.playAgain}
        

        
        />
    ))
    return(
        <div className="card">
           {showQuizQuestions}
           <div className="card__bottom">
            {
                !props.hasCheckedAnswer ?  
                <button className="card__btn"  onClick={()=> props.checkAnswer()}>Check answers</button> 
                :
                <div>
                    <p>You scored {props.score}/5 correct answers</p>
                    <button className="card__btn"  onClick={()=> props.playAgain()}>Play again</button>

                </div>
            }
           


           </div>
        </div>
    );
}
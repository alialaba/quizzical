import Quiz from "./Quiz"
export default function QuizScreen(props){

    const showQuizQuestions = props.quizData.map((item)=>(
        <Quiz
        key={item.id}
        questionId={item.id}
        question={item.question}
        answers={item.answers}
        
        />
    ))
    return(
        <div>
           {showQuizQuestions}
        </div>
    );
}
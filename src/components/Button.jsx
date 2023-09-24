import { decode } from "html-entities";

export default function Button(props){

    const styleBtn = (item)=>{
        let style = {};
        if(item.isCorrect){
            style ={
                backgroundColor: "#94D7A2",
                border: "none"
            }
        }else if(item.isWrong){
            style = {
                backgroundColor: "#F8BCBC",
                opacity: 0.2,
                border: "none"
            }
        }else if(item.isFaded){
            style = {
                opacity: 0.2
            }
        }else{
           style ={
            backgroundColor: item.isHeld ? "#D6DBF5" : "transparent"
           }
        }

      return style;

    }
    return(
        <button 
        className="quiz__answer" 
        style={styleBtn(props.item)}
        onClick={()=> props.heldAnswer(props.item.id, props.questionId)}>
            {decode(props.answer)}
        </button>
    );
}
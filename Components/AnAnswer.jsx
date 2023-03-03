import React from "react";


export default function AnAnswer(props){
    
    const correct=props.correct;
   
    function decodeHtml(html) {
        var txt = document.createElement("p");
        txt.innerHTML = html;
        return txt.textContent;
    }


    function changer(){
        props.selector(props.theIndex)
        
    }
    function doNothing(){
        
    }

    const styles={
        backgroundColor: props.selected===props.theIndex? "#D6DBF5":"white"
    }

    const checkedStyles={
        cursor:"default",
        backgroundColor: props.theIndex===0? "#94D7A2": props.selected===props.theIndex? "#F8BCBC": "white"      
    }

    const choicePStyles={
        color: props.displayCorrectAnswers && props.theIndex!=0? "#838694":"black"
    }


        return (
            <div className="choice"  onClick={props.displayCorrectAnswers? doNothing: changer} style={props.displayCorrectAnswers? checkedStyles: styles}>
                <p className="choiceP" style={choicePStyles}>
                    {decodeHtml(props.anAnswer)}
                </p>
            </div>
        )
    
    
}
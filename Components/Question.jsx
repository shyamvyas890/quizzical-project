import React from "react";
import AnAnswer from "/Components/AnAnswer.jsx"

export default function Question(props) {
    const [selected, setSelected]= React.useState(-1);


    React.useEffect(function(){
        setSelected(-1)
        setRandomIndexPattern(shuf([0,1,2,3]))
    },[props.refetch])

    const [randomIndexPattern, setRandomIndexPattern]=React.useState(shuf([0,1,2,3]));
    React.useEffect(
        function(){
            props.setCorrectAnswers(function(prev){
                let temporaryArray=[...prev];
                if(selected===0){
                    temporaryArray[props.questionIndex]=true;
                }
                else{
                    temporaryArray[props.questionIndex]=false;
                }
                return temporaryArray;
            });
        }
        ,[selected]
    )


    const answersArray= props.choices.map((choice, index)=>{
        return <AnAnswer 
        anAnswer={props.choices[index]}
        theIndex={index}
        selector={setSelected}
        selected={selected}
        correct={index===0? true: false}
        displayCorrectAnswers={props.displayCorrectAnswers}
        key={index.toString()}
        />
    })
    function shuf(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
        let returnVal= [];
        for(let i=0;i<4;i++){
            let currentValue= randomIndexPattern[i];
            returnVal.push(answersArray[currentValue]);
        }            
            
        function decodeHtml(html) {
            var txt = document.createElement("p");
            txt.innerHTML = html;
            return txt.textContent;
        }
    return (
        <div className="questionAndAnswer">
            <h4 className="question">{decodeHtml(props.question)}</h4>
            <div className="choices">
               {returnVal}
            </div>
        </div>    
    )
}
import React from "react"

export default function Homepage(props){
        function stateChanger(){
            props.setEnter(true);
        }


        return (
            <>
                <div className= "box">
                    <h3 className="title">Quizzical</h3>
                    <p className="desc">Test Your Trivia Skill!</p>
                    <button onClick={stateChanger} className="start">Start Quiz</button>
                </div>  
            </>
        )
}
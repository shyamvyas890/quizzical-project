import React from "react"
import Question from "/Components/Question.jsx"


export default function Questions(props){
    const [data, setData]= React.useState({
        questions:new Array(5).fill("Loading"),
        correctAnswers: new Array(5).fill("Loading"),
        wrongAnswers: new Array(5).fill(new Array(3).fill("Loading"))
      });
      const [displayCorrectAnswers, setDisplayCorrectAnswers]= React.useState(false);
      const [correctAnswers, setCorrectAnswers]=React.useState([false, false, false, false, false]);
      const [refetch, setRefetch]= React.useState(0);
      function changeCorrectAnswers(){
        setDisplayCorrectAnswers(true)
      }

      function replay(){;
        setData({
          questions:new Array(5).fill("Loading"),
          correctAnswers: new Array(5).fill("Loading"),
          wrongAnswers: new Array(5).fill(new Array(3).fill("Loading"))
        })
        setDisplayCorrectAnswers(false);
        setCorrectAnswers([false, false, false, false, false])
        setRefetch(prev=>prev+1)
      }

      function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
      }
      React.useEffect( () => {
          async function fetchTheData(){
            await fetch("https://opentdb.com/api.php?amount=5&type=multiple").then(res=>res.json()).then(function(theData){
              setData(function(prev){
                let temp = {}
                Object.assign(temp, prev);
                for (let i=0;i<theData.results.length;i++) {
                  temp.questions[i]=theData.results[i].question;
                  temp.correctAnswers[i]=theData.results[i].correct_answer;
                  temp.wrongAnswers[i]=[...theData.results[i].incorrect_answers];
                }
                return temp
              })
          });

          }
          fetchTheData(); 
      },[refetch])
       


        let numberCorrect=0;
        for(let i=0; i<correctAnswers.length;i++){
          if (correctAnswers[i]===true){
            numberCorrect++;
          }
        } 
        return (
        <div id="questionsBox">
          <Question 
          question={data.questions[0].replaceAll("&quot;", "\"")}
          choices={[data.correctAnswers[0],data.wrongAnswers[0][0], data.wrongAnswers[0][1], data.wrongAnswers[0][2]]}
          displayCorrectAnswers={displayCorrectAnswers}
          questionIndex={0}
          setCorrectAnswers={setCorrectAnswers}
          refetch={refetch}
          />
          <Question 
          question={data.questions[1].replaceAll("&quot;", "\"")}
          choices={[data.correctAnswers[1],data.wrongAnswers[1][0], data.wrongAnswers[1][1], data.wrongAnswers[1][2]]}
          displayCorrectAnswers={displayCorrectAnswers}
          questionIndex={1}
          setCorrectAnswers={setCorrectAnswers}
          refetch={refetch}
          />
          <Question 
          question={data.questions[2].replaceAll("&quot;", "\"")}
          choices={[data.correctAnswers[2],data.wrongAnswers[2][0], data.wrongAnswers[2][1], data.wrongAnswers[2][2]]}
          displayCorrectAnswers={displayCorrectAnswers}
          questionIndex={2}
          setCorrectAnswers={setCorrectAnswers}
          refetch={refetch}
          />
          <Question 
          question={data.questions[3].replaceAll("&quot;", "\"")}
          choices={[data.correctAnswers[3],data.wrongAnswers[3][0], data.wrongAnswers[3][1], data.wrongAnswers[3][2]]}
          displayCorrectAnswers={displayCorrectAnswers}
          questionIndex={3}
          setCorrectAnswers={setCorrectAnswers}
          refetch={refetch}
          />
          <Question 
          question={data.questions[4].replaceAll("&quot;", "\"")}
          choices={[data.correctAnswers[4],data.wrongAnswers[4][0], data.wrongAnswers[4][1], data.wrongAnswers[4][2]]}
          displayCorrectAnswers={displayCorrectAnswers} 
          questionIndex={4}
          setCorrectAnswers={setCorrectAnswers}
          refetch={refetch}
          />
          <section>
            {!displayCorrectAnswers && <button className="check" onClick={changeCorrectAnswers}>Check Answers</button>}
            {displayCorrectAnswers && <p className="yourScore">You scored {numberCorrect}/5 correct answers</p>}
            {displayCorrectAnswers && <button className="check" onClick={replay}>Play again</button>}
          </section>
        </div>
        )
}
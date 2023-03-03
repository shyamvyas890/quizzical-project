import React from "react"
import Questions from "/Questions.jsx"
import Homepage from "/Homepage";



export default function App() {

     const [enter, setEnter]= React.useState(false);
     if(!enter) {
        return (
          <Homepage setEnter={setEnter}     />
        )
      }
    
      return (

        <Questions 
        setEnter={setEnter}
        />
      )
}


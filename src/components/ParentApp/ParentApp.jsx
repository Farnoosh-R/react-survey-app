import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useUserInfoContext } from "../Contexts/UserInfoContext";
import Question from "../Question/Question";
import './style.scss';
import { useAnswerContext } from "../Contexts/AnswerContext";

const ParentApp = () => {


    const [answers, setAnswers] = useState([]);
    const {test, setTest} = useUserInfoContext();

    const {userA, setUserA} = useAnswerContext();
    
    


const addAnswer = (answerItem) => {
    const newAnswer = [
        ...answers,
        {
            id: uuidv4(),
            userAnswer: answerItem,
            
        }       
    ]

    const newUserA = [
        ...answers,
        {
            id: uuidv4(),
            userAnswer: answerItem,
            
        }       
    ]
    setAnswers(newAnswer);
    setUserA(newUserA);
    console.log(userA);
    
}

useEffect(() => {
    console.log('userAnswer:', userA)
}, [userA])

    return(
        <div className="ParentApp">
      {test[0].name !== "" ? <Question addAnswer={addAnswer} question={"How old are you?"}/> : ""}
      {userA[0].userAnswer &&<Question addAnswer={addAnswer} question={"What is your favorite food?"}/>}
    
        </div>
    )
}
export default ParentApp;
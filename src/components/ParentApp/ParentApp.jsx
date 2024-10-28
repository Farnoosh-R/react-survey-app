import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useUserInfoContext } from "../Contexts/UserInfoContext";
import Question from "../Question/Question";
import './style.scss';
import { useAnswerContext } from "../Contexts/AnswerContext";
import { Button } from "../Button/Button";

const question=[
    {q: "How old are you?"},
    {q: "what is your favorite food?"},
    {q: "What is your favorite color?"}
]

const ParentApp = () => {


    const [answers, setAnswers] = useState([]);
    const {test, setTest} = useUserInfoContext();
    const[count,setCount]=useState(0);
    const {userA, setUserA} = useAnswerContext();
    const [refresh, setRefresh] = useState(0);
    



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
    
    if (count < 2){
        setCount(count + 1)
    }

}



const handleAnswers = () => {

    console.log("user name:", test[0].name)
    console.log("answers:")

    userA.map((item) => {
        console.log(item.userAnswer)
    })
}


    return(
        <div className="ParentApp">
        {/*{test[0] && <Question addAnswer={addAnswer} question={"How old are you?"}/>}*/}
        {userA[0] && <Question addAnswer={addAnswer} question={question[count].q}/>}
        {userA[2] && <Button handleClick={handleAnswers} title={"Send Answers"}/>}
        {/*{userA[1] && <Question addAnswer={addAnswer} question={"What is your favorite food?"}/>}
        {userA[2] && <Question addAnswer={addAnswer} question={"What is your favorite color?"}/>}
        {userA[3] && <Button handleClick={handleAnswers} title={"Send Answers"}/>}*/}
        </div>
    )
}
export default ParentApp;
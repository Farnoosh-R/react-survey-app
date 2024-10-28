import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useUserInfoContext } from "../Contexts/UserInfoContext";
import Question from "../Question/Question";
import './style.scss';
import { useAnswerContext } from "../Contexts/AnswerContext";
import { Button } from "../Button/Button";

const question=[{question:"food"},{question:"old"},{question:"color"}]

const ParentApp = () => {


    const [answers, setAnswers] = useState([]);
    const {test, setTest} = useUserInfoContext();
    const[count,setCount]=useState(0);

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
    setCount(prev=>prev+1)
    console.log(userA);
    
}

// useEffect(() => {
//     if(count>=3){
//         alert('ok')
//     }
// }, [count])

const handleAnswers = () => {

    console.log("user name:", test[0].name)
    console.log("answers:")

    userA.map((item) => {
        console.log(item.userAnswer)
    })
    
}

    return(
        <div className="ParentApp">
        {test[0] && <Question addAnswer={addAnswer} question={"How old are you?"}/>}
        {userA[1] && <Question addAnswer={addAnswer} question={"What is your favorite food?"}/>}
        {userA[2] && <Question addAnswer={addAnswer} question={"What is your favorite color?"}/>}
        {userA[3] && <Button handleClick={handleAnswers} title={"Send Answers"}/>}
        </div>
    )
}
export default ParentApp;
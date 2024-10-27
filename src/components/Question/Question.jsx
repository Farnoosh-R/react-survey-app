import React, { useState } from "react";


const Question = ({addAnswer,question}) => {

    const [answer, setAnswer] = useState('');
    


const handleChange = (e) => {
    setAnswer(e.target.value)
    console.log(answer)
}
const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(answer);
}

    return(
        <div className="Question mb-5">
        <form onSubmit={handleSubmit}>
        <div className="text-left">
        <b>{question}?</b>
        <input onChange={handleChange} className="form-control" type="text" placeholder="Enter your Answer"/>
        </div>

        </form>
        </div>
    )
}
export default Question;
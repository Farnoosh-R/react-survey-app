import React, { useEffect, useRef, useState } from "react";


const Question = ({addAnswer,question}) => {

    const [answer, setAnswer] = useState('');
    const inputref = useRef(null);


const handleChange = (e) => {
    setAnswer(e.target.value)
    console.log(answer)
}
const handleSubmit = (e) => {
    e.preventDefault();
    addAnswer(answer);
}

useEffect(() => {
    inputref.current.value = "";
})

    return(
        <div className="Question mb-5">
        <form onSubmit={handleSubmit}>
        <div className="text-left">
        <b>{question}?</b>
        <input onChange={handleChange} className="form-control" value={answer} type="text" placeholder="Enter your Answer" ref={inputref}/>
        </div>

        </form>
        </div>
    )
}
export default Question;
import React from "react";
import './style.scss';

export const Button = ({title, type="primary", handleClick}) => {
    return(
        <button onClick={handleClick} className={`Button Button--${type}`}>{title}</button>
    )
}

export const ButtonSubmit = ({title, type="submit", handleClick}) => {
    return(
        <button onClick={handleClick} className={`Button Button--${type}`}>{title}</button>
    )
}


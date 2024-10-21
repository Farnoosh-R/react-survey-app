import React from "react";
import './style.scss';

const Button = ({title, type="primary", handleClick}) => {
    return(
        <button onClick={handleClick} className={`Button Button--${type}`}>{title}</button>
    )
}
export default Button;
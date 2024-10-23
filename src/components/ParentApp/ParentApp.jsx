import React from "react";
import QuestionOne from "../QuestionOne/QuestionOne";
import FormUserInfo from "../FormUserInfo/FormUserInfo";

const ParentApp = () => {
    return(
        <div className="ParentApp">
        <FormUserInfo />
        <QuestionOne />
        </div>
    )
}
export default ParentApp;
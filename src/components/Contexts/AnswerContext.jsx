import React, { useContext, useState } from "react";

const AnswerContext = React.createContext();

export const useAnswerContext = () => {
  const answerContextVslue = useContext(AnswerContext);
  return answerContextVslue;
};

export const AnswerContextProvider = ({ children }) => {
  const [userA, setUserA] = useState([{ id: 0, userAnswer: "" }]);

  return (
    <AnswerContext.Provider value={{ userA, setUserA }}>
      {children}
    </AnswerContext.Provider>
  );
};

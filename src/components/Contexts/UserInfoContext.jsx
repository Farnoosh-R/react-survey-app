import React, { useContext, useState } from "react";

const UserInfoContext = React.createContext();



export const useUserInfoContext = () => {
    const contextValue = useContext(UserInfoContext)

    return contextValue;

}


export const UserInfoProvider = ({children}) => {
    const [test, setTest] = useState([]);

    return (
        <UserInfoContext.Provider value={{setTest, test}}>
        {children}
        </UserInfoContext.Provider>
    )
}

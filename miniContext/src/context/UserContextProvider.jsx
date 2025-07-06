import React from "react";
import UserContext from "./userContext";


const UserContextProvider = ({children}) => //generic name -- jo bhi ayy as it is pass kr do
{
    const [user, setUser] = React.useState(null) //jo access yaha mila usko user provider ki value main daal do
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider
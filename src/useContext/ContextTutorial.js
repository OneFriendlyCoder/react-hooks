import React, {createContext ,useContext, useEffect} from "react";
import Login from "./login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial(){
    const [username, setUsername] = useEffect("");
    return (
        <AppContext.Provider value={{username, setUsername}}>
            <Login /><User />
        </AppContext.Provider>
    )   
}
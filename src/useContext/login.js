import React from "react";
import { AppContext } from "./ContextTutorial.js";
function Login({setUsername}) {

    const {setUsername} = useContext(AppContext);

    return(
        <div>
            <input onChange={(event) => {
                setUsername(event.target.value);
            }}></input>
        </div>
    )
}

export default Login;
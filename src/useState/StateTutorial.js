import React, {useState} from 'react'

const StateTutorial = () => {
    
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter+1);
    }

    const [inputValue, setInputValue] = useState("Helloworld");
    let handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);   
    }

    return (
    <>
        <div> 
            { counter }
            <button onClick={increment}>Increment value</button> 
        </div>  

        <div>
            <input placeholder='enter something' onChange={handleChange}/>{inputValue}
        </div>  
    </>

    )
};

export default StateTutorial

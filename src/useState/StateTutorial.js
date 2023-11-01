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

// UPDAING OBJECTS AND ARRAYS IN STATE
    const [form, setForm] = useState({
        firstName : "Hello",
        lastName : "world",
        email: "helloworld@gmail.com"
    });

    return (
    <>
        <div> 
            { counter }
            <button onClick={increment}>Increment value</button> 
        </div>  

        <div>
            <input placeholder='enter something' onChange={handleChange}/>{inputValue}
        </div>  

        <div>
            <label>
                First name: <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value});}}/>
            </label>
            <label>
                Last name: <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value});}}/>
            </label>
            <label>
                Email: <input value={form.email} onChange={e => {setForm({...form, email: e.target.value});}}/>
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                {form.email}
            </p>
        </div>

    </>

    )
};

export default StateTutorial

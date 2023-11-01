import React, { useEffect, useLayoutEffect, useReducer, useRef } from 'react'

const LayoutEffectTutorial = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "WORLD"
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

  return (
    <div className='App'>
        <input ref = {inputRef} value="HELLO"/>
    </div>
  )
}

export default LayoutEffectTutorial

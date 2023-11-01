import React, {useRef} from 'react'
import Button from './Button.js'

const ImperativeHandleTutorial = () => {

    const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() =>{
        buttonRef.current.alterToggle();
      }}>
        Button from Parent
      </button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeHandleTutorial

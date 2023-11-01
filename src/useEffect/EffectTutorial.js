import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EffectTutorial = () => {
  
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{setData(response.data[0].email)})
    }, [count])

    return (
    <div>
      Hello world <h1>{data}</h1> <h1>{count}</h1> 
      <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default EffectTutorial

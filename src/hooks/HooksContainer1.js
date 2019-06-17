import React, {useState} from 'react';




const HooksContainer1 = () => {

    const [stateValue, setValue] = useState(0)
    const incrementValue = () => {
        setValue(stateValue+1)
    }
    const decrementValue = () => {
        setValue(stateValue-1)
    }

    return(
      <div>
      React Hooks
      <br />
      <button onClick={ () => incrementValue() }>Increment</button>
      <br />
      <button onClick={ () => decrementValue() }>Decrement</button>
      <p>{stateValue} </p> 
      </div>
    )
}


export default HooksContainer1;

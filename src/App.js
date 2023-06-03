
  import './App.css';
  import { useReducer } from 'react';

  const initialState = {counter:0}
  function App() {

    const reducer=(prevState, action)=>{
      console.log(prevState)
    switch(action.type) {

      case "INCREMENT": 
      
      return {counter:prevState.counter + action.payload}
      
      case "DECREMENT" : 
      if (prevState.counter >0) {
        return {counter:prevState.counter - action.payload}
      } else {
        return prevState
      }
      
      
      default: 
      return {prevState}

    }
    }

    const [state, dispatch ]=useReducer(reducer, initialState)

    return (
      <>
      <h1>{state.counter}</h1>
    <button onClick={()=>dispatch( {type:"INCREMENT", payload: 2})}> Increase </button>
    <button onClick={()=>dispatch( {type:"DECREMENT", payload: 2})}> Decrease </button>

      </>

    );
  }

  export default App;



// import React, { useReducer } from 'react';

// const initialState = {
//   num1: "",
//   num2: "",
//   res: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "num1":
//       return { ...state, num1: action.payload };
//     case "num2":
//       return { ...state, num2: action.payload };
//     case "res":
//       return { ...state, res: action.payload };
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleInputChange = (e) => {
//     dispatch({ type:e.target.name, payload: e.target.value });
//   };

//   const handleAdd = () => {
//     const result = Number(state.num1) + Number(state.num2);
//     dispatch({ type: "res", payload: result });
//   };

//   const handleSubtract = () => {
//     const result = Number(state.num1) - Number(state.num2);
//     dispatch({ type: "res", payload: result });
//   };

//   const handleMultiply = () => {
//     const result = Number(state.num1) * Number(state.num2);
//     dispatch({ type: "res", payload: result });
//   };

//   const handleDivide = () => {
//     const result = Number(state.num1) / Number(state.num2);
//     dispatch({ type: "res", payload: result });
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <div className='m-2'>
//             <label htmlFor="num1">First number</label>
//             <input type="text" value={state.num1} name='num1' onChange={handleInputChange} />
//           </div>
//           <div className='m-2'>
//             <label htmlFor="num2">Second number</label>
//             <input type="text" value={state.num2} name='num2' onChange={handleInputChange} />
//           </div>
//           <div className='m-2'>
//             <label htmlFor="res">Result</label>
//             <input type="text" value={state.res} readOnly />
//           </div>
//           <div className='m-2'>
//             <input type="button" value="Add" onClick={handleAdd} />
//             <input type="button" value="Subtract" onClick={handleSubtract} />
//             <input type="button" value="Multiply" onClick={handleMultiply} />
//             <input type="button" value="Divide" onClick={handleDivide} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React,{ useReducer } from "react"
const is={
  num1:"",
  num2:"",
  res:"",
};
const reducer=(state,action)=>{
  switch(action.type)
  {
    case "num1":
      return {...state, num1: action.payload};
    case "num2":
      return {...state, num2: action.payload};
    case "res":
      return {...state, res: action.payload};
    default:
      return state; 
  }
};

const App = () => {
  const[state, dispatch]= useReducer(reducer,is);
  const handlechange=(e)=>{
    dispatch({type:e.target.name, payload:e.target.value})
  }
  const handleAdd=()=>{
    const result= Number(state.num1) + Number(state.num2);
    dispatch({type:"res", payload:result});
  }
  
  const handleSub=()=>{
    const result= Number(state.num1) - Number(state.num2);
    dispatch({type:"res", payload:result})
  }
  const handleMul=()=>{
    const result= Number(state.num1) * Number(state.num2);
    dispatch({type:"res", payload:result})
  }
  const handleDiv=()=>{
    const result= Number(state.num1) / Number(state.num2);
    dispatch({type:"res", payload:result})
  }
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <div>
              <label htmlFor="num1">First number</label>
              <input type="text" value={state.num1} name="num1" onChange={handlechange} />
              </div>
              <div>
              <label htmlFor="num2">Second number</label>

              <input type="text" value={state.num2} name="num2" onChange={handlechange} />

              </div>
              <div>
              <label htmlFor="res">Result</label>
              <input type="text" value={state.res} readOnly />

              </div>
            
              <input type="button" value="Addition"  onClick={handleAdd} />
              <input type="button" value="Substract" onClick={handleSub} />
              <input type="button" value="Multiply"  onClick={handleMul} />
              <input type="button" value="Division"  onClick={handleDiv} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React, { useReducer } from 'react';


type Action = {
  type: 'SET_TEXT';
  payload: string;
};

function reducer(state: string, action: Action): string {
  switch (action.type) {
    case 'SET_TEXT':
      return action.payload; 
    default:
      return state;  
  }
}

function InputText() {
  
  const [text, dispatch] = useReducer(reducer, '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TEXT', payload: event.target.value });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}

export default InputText;

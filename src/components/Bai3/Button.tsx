import React, { useContext } from 'react'
import ThemeContext from '../Bai1/ThemeContext'

export default function Button() {
    // const theme = useContext(ThemeContext);
    // const buttonStyle = {
    //     backgroundColor: theme,
    //     color: 'white',
    //     border: 'none',
    //     padding: '10px 20px',
    //     borderRadius: '5px',
    //     cursor: 'pointer'
    //   };
      const context = useContext(ThemeContext);

      
    
      const { theme, toggleTheme } = context;
    
      const buttonStyle = {
        backgroundColor: theme,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      };
  return (
    <div>
        {/* <button style={buttonStyle}>Click me</button> */}
        <button onClick={toggleTheme} style={buttonStyle}>
        Click me
      </button>
      <p>Current background color: {theme}</p>
    </div>
  )
}

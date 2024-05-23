import React, { useContext } from 'react'
import ThemeContext from '../Bai1/ThemeContext'

export default function ChildComponent() {
    const theme = useContext(ThemeContext);
  return (
    <div style={{ color: theme }}>ChildComponent</div>
  )
}

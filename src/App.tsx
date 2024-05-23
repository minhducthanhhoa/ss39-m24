import React from 'react'
import ThemeContext from './components/Bai1/ThemeContext'
import ChildComponent from './components/Bai2/ChildComponent'
import Button from './components/Bai3/Button'
import Increase from './components/Bai5/Increase'
import InputText from './components/Bai7/InputText'

export default function App() {
  return (
    <div>
      <ThemeContext.Provider value="blue">
        <ChildComponent></ChildComponent>
        <Button />
      </ThemeContext.Provider>
      <Increase></Increase>
      <InputText></InputText>
    </div>
  )
}

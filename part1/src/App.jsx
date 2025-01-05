import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
    <Display counter={counter}/>
    <Button
      onClick={increaseByOne}
      text='plus'
    />
    <Button
      onClick={setToZero}
      text='zero'
    />     
    <Button
      onClick={decreaseByOne}
      text='minus'
    />   
    </>
  )

}
export default App

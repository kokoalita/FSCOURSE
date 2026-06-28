import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/*
const App = () => (   
  <div>
    <p>Hello world</p>
  </div>
)
*/

/*
  const App = () => {
  console.log('Hello from component 1')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

*/

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

function App() //= () => 
  {
  const now = new Date()
  const a = 10
  const b = 20

  // example 2 for the props  
  const name = 'Peter'
  const age = 10

  //emple of th error to try to use objects 
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  //example 4
  
  const friends2 = [ 'Peter', 'Maya']

  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}  </p>
      <Hello name="Alice" age={25} />
      <Hello name={name} age={age} />  {/* example 2 for the props */}
     
     {/*  <p>{friends[0]}</p> este es el ejemplo del error */}
      <p>{friends[0].name} is {friends[0].age} years old</p>
      <p>{friends2}</p>
    </div>
  )
}

/* this is the example for returning multiple elements from a component as an array and not as a single element with a root element  
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
*/

/* this an example of a component that returns multiple elements without a root element using React.Fragment
function App() //= () => 
  {
  const now = new Date()
  const a = 10
  const b = 20

  // example 2 for the props  
  const name = 'Peter'
  const age = 10

  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}  </p>
      <Hello name="Alice" age={25} />
      <Hello name={name} age={age} />  
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
*/
export default App

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
      <Hello name={name} age={age} />  
     
      <p>{friends[0].name} is {friends[0].age} years old</p>
      <p>{friends2}</p>
    </div>
  )
}

*/
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

//part c - prerendering 
/*const App = (props) => {
  const {counter} = props
  console.log('Hello from component ' + counter)
  return (
    <div>{counter}</div>
  )
}*/

//todo: part c - stateful component
/*
const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Hello from component ' + counter)

  setTimeout(
    () => {
      console.log('showing----...', counter)
      setCounter(counter + 1)
      console.log('showing...', counter)
    },
    1000
  )
  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
*/

/*
const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Hello from component ' + counter)
  
  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }
  
  const setToZero = () => setCounter(0)


  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}
  */

//Part 1 - c - Pasaing sttae to a child components
/*
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Hello from component ' + counter)
  
  const increaseByOne = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }
  
  const setToZero = () => setCounter(0)


  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  )
}
  */


//Part 1 - c - changes in the state  cause  re-render .
/*
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Rendering with the counter value: ' + counter)
  
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
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}
*/

//Part 1 - c -refactoring the components
/*
const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) =>  <button onClick={onClick}> {text} </button> 

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Rendering with the counter value: ' + counter)
  
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
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}*/

// Par 1 .d conditiona rendering 


const Button = ({ onClick, text }) =>  <button onClick={onClick}> {text} </button> 

const History = (props) => {
  console.log('props',props)
  // debugger -- do not forget to use this
  console.log('continue', props)
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRigth = right + 1
    setRight(updatedRigth)

    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text= {left} />
      <Button onClick={handleRightClick} text={right} />
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
      
      <History allClicks={allClicks} />
    </div>
  )
}
export default App

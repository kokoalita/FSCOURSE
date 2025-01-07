import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

/*const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}*/


const Hello = (props) => {
/*  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are  {props.age} years old</p>
      <p>So you were probably born in {bornYear()}</p>

    </div>
  )*/
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const name = 'Peter'
  const age = 10
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
      console.log('clicked')
  }
  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log('rendering....', counter)*/

  /*example for div
  return (
    <div>
      
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name = 'eve' age= '24'/>
      <Hello name = {name} age={age}/>
      <Hello name = {name + 'jj'} age={age + 44}/>
    </div>
  )

  //This option use the array-- not add div tag
  return [
      
      <p>Hello world, it is {now.toString()}</p>,
      <p>
        {a} plus {b} is {a + b}
      </p>,
      <Hello name = 'eve' age= '24'/>,
      <Hello name = {name} age={age}/>,
      <Hello name = {name + 'jj'} age={age + 44}/>
    ]*/

    const friends = [
      { name: 'Peter', age: 4 },
      { name: 'Maya', age: 10 },
    ]


  const friends2 = [ 'Peter', 'Maya']

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>{counter}</div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name = 'eve' age= '24'/>
      <Hello name = {name} age={age}/>
      <Hello name = {name + 'jj'} age={age + 44}/>

      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

      <p>{friends2}</p>


      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </>
  )

}
export default App

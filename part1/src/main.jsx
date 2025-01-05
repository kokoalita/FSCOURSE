import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let counter = 1

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*const root = createRoot(document.getElementById('root'))


const refresh = () => {
  root.render(
    <App counter={counter} />
  )
  console.log((counter))
  }

  setInterval(() => {
    refresh()
    counter +=1
  }, 1000)
*/
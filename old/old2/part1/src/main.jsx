import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
import axios from 'axios'

axios.get('http://localhost:3001/notes').
then(response => {
  const notes = response.data
  console.log('hola ', notes, 'all ', response)

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App notes={notes} />
    </StrictMode>,
  )
})
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>)


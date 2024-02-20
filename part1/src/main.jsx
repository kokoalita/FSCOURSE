import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import './index.css'
import axios from 'axios'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
/*
axios
  .get('http://localhost:3001/notes')
  .then(response => {
      const notes = response.data
      console.log(notes)

      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <App notes={notes}/>
        </React.StrictMode>,
      )
    })
*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteServices from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)
  
  const hook = () => {
    console.log('effect')
    noteServices
    .getAll()
    .then(initialNotes => {
      console.log('promise fulfilled')
      setNotes(initialNotes)
    })
  }
  
  const toggleImportance = (id) => {    
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }   
    noteServices
      .update(note.id, changedNote)
      .then(response => {
            setNotes(notes.map(note => note.id === id ? response : note))
            })      
      .catch(error => {
        console.log('fail')
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }       
    noteServices
    .create(noteObject)
    .then(returnedNote  => {
      console.log(returnedNote )
      setNotes(notes.concat(returnedNote ))
      setNewNote('')
    })
  } 

  useEffect(hook, [])  
  console.log('render', notes.length, 'notes')
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>      
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportance(note.id)} 
          />
        )}
      </ul>
      
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>  
    </div>
    
  )
}

export default App
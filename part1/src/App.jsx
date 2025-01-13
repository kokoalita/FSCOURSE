import { useState, useEffect } from 'react'
//import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  /*
  useEffect(() => {
  console.log('effect')

  const eventHandler = response => {
    console.log('promise fulfilled')
    setNotes(response.data)
  }

  const promise = axios.get('http://localhost:3001/notes')
  promise.then(eventHandler)
}, [])
  */
  const hook = () => {
    console.log('effect')
    noteService.getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        const nonExisting = {
          id: 10000,
          content: 'This note is not saved to server',
          important: true,
        }
        setNotes(initialNotes.concat(nonExisting))
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    //axios
      //.post('http://localhost:3001/notes', noteObject)
    noteService.create(noteObject)
      .then(returnedNote => {
        console.log(returnedNote)

        setNotes(notes.concat(returnedNote))
        setNewNote('')
        console.log('button clicked', event.target)
        console.log(event.target)
      })   
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    //axios.put(url, changedNote)
    noteService.update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id === id ? returnedNote : n))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
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
        {notesToShow.map(note =>  <Note 
                                      key={note.id} 
                                      note={note} 
                                      toggleImportance={() => toggleImportanceOf(note.id)}
                                  />
                        )
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App

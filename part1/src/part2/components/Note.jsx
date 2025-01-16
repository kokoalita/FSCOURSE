
import '.././content/index.css'

const Note = ({ note, toggleImportance }) => {
  const label = note.importat ? 'make not important' : 'make important'
  return (
    <li className='note' >
      {note.content}
      <button onClick={toggleImportance}>label</button>
    </li>
  )
}

export default Note
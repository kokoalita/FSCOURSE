require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

console.log(url)

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content:  {
    type: String,
    minLength: 5,
    required: [true, 'content is required']
  },
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*const note = new Note({
  content: 'HTML is easy 2',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
 // mongoose.connection.close()
})*/

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

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

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
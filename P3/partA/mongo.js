require('dotenv').config()
const dns = require('dns')
const mongoose = require('mongoose')

dns.setServers(['8.8.8.8', '1.1.1.1'])


const url = process.env.MONGODB_URI
console.log(url)
mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
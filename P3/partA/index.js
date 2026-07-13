////require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dns = require('dns')
//const mongoose = require('mongoose')
const Note = require('./models/note')


//dns.setServers(['8.8.8.8', '1.1.1.1'])

app.use(cors())
app.use(express.json())
app.use(requestLogger)


//const url = process.env.MONGODB_URI
//mongoose.set('strictQuery',false)
//mongoose.connect(url, { family: 4 })
//
//const noteSchema = new mongoose.Schema({
//  content: String,
//  important: Boolean,
//})
//noteSchema.set('toJSON', {
//  transform: (document, returnedObject) => {
//    returnedObject.id = returnedObject._id.toString()
//    delete returnedObject._id
//    delete returnedObject.__v
//  }
//})
//const Note = mongoose.model('Note', noteSchema)

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}


app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find().then(notes => {
    response.json(notes)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body || !body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
  .then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })  
  .catch(error => next(error))
  /*.catch(error => {
    console.log(error)
    //response.status(500).end()
      response.status(400).send({ error: 'malformatted id' })
  })*/
})

app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndDelete(request.params.id)
  .then(() => {
    response.status(204).end()
  })
  .catch(error => next(error))
})
const unknownEndpoint = (request, response) => {
    console.log('error')
    response.statusMessage = 'unknown endpoint'
  response.status(404).send()
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// handler of requests that result in errors
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
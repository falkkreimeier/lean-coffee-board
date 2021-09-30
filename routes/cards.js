const express = require('express')
const Card = require('../models/Card')
const { nanoid } = require('nanoid')

const router = express.Router()

let cards = [
  {
    text: 'What is MongoDB?',
    author: 'John Doe',
    id: '1234abc',
  },
  {
    text: 'What is Node.js?',
    author: 'Jane Doe',
    id: '123abcd',
  },
]

router.get('/', (request, response) => {
  Card.find()
    .then(data => response.status(200).json(data))
    .catch(error => response.status(404).json(error))
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  Card.findById(id)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(404).json(error))

  // const card = cards.find(card => card.id === id)
  // if (card) {
  //   response.status(200).json(card)
  // } else {
  //   const error = { message: 'Could not find object with that id.' }
  //   response.status(404).json(error)
  // }
})

router.post('/', (request, response) => {
  const { text, author } = request.body

  if (text === '' && author === '') {
    const error = { message: 'Information missing.' }
    return response.status(400).json(error)
  }
  const newCard = { text, author }

  Card.create(newCard)
    .then(newCard => response.status(201).json(newCard))
    .catch(error => response.status(404).json(error))
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const { text, author } = request.body

  if (!text && !author) {
    const error = { message: 'Information missing.' }
    return response.status(400).json(error)
  }

  Card.findByIdAndUpdate(id, { text, author }, { new: true }).then(card =>
    response
      .status(200)
      .json(card)
      .catch(error => response.status(400).json(error))
  )

  // const card = cards.find(card => card.id === id)

  // if (!card) {
  //   const error = { message: 'Could not find object with that id.' }
  //   return response.status(404).json(error)
  // }

  // const newCard = {
  //   text: text ? text : card.text,
  //   author: author ? author : card.author,
  //   id: card.id,
  // }

  // const index = cards.findIndex(card => card.id === id) // gives index of card

  // cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]

  // // const firstHalfOfArray = cards.slice(0, index)
  // // const lastHalfofArray = cards.slice(index + 1)

  // // cards = [...firstHalfOfArray, newCard, ...lastHalfofArray]
  // response.status(200).json(newCard)
})

router.delete('/:id', (request, response) => {
  const { id } = request.params
  Card.findByIdAndDelete(id)
    .then(card => response.status(200).json(card))
    .catch(error => response.statius(404).json(error))
})

module.exports = router

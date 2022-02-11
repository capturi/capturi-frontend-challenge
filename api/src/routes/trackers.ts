import express from 'express'

import * as TrackerRepository from '../data'
import {
  createTrackerRequestSchema,
  updateTrackerRequestSchema,
  validate,
} from '../schemas'

const router = express.Router()

router.get('/', (req, res) => {
  let page = 1
  let limit = 10
  if (typeof req.query.page === 'string') {
    page = parseInt(req.query.page) || 1
  }
  if (typeof req.query.limit === 'string') {
    limit = parseInt(req.query.limit) || 10
  }
  const skipIndex = (page - 1) * limit
  const results = TrackerRepository.findAll().slice(
    skipIndex,
    skipIndex + limit,
  )
  res.status(200).send(results)
})

router.post('/', validate(createTrackerRequestSchema), (req, res) => {
  const newTracker = TrackerRepository.insert({
    name: req.body.name,
    phrases: req.body.phrases,
    speaker: req.body.speaker,
  })
  res.status(201).send(newTracker)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const tracker = TrackerRepository.find(id)
  if (tracker) {
    res.status(200).send(tracker)
  } else {
    res.status(404).send(`tracker with id "${id}" not found`)
  }
})

router.put('/:id', validate(updateTrackerRequestSchema), (req, res) => {
  const id = Number(req.params.id)
  try {
    const updatedTracker = TrackerRepository.replace(id, {
      name: req.body.name,
      phrases: req.body.phrases,
      speaker: req.body.speaker,
    })
    res.status(200).send(updatedTracker)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  try {
    TrackerRepository.remove(id)
    res.status(204).send()
  } catch (e) {
    res.status(404).send(e.message)
  }
})

export default router

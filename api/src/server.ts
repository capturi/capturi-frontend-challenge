import 'dotenv/config'

import cors from 'cors'
import express from 'express'

import dictionaryRouter from './routes/dictionary'
import trackersRouter from './routes/trackers'

const port = process.env.SERVER_PORT

function getRandomDelay(min: number, max: number) {
  return min + Math.random() * (max - min)
}

const app = express()

app.use(cors())
app.use(express.json())

// Adding some fake latency to all requests
app.use(function (req, res, next) {
  const wait = getRandomDelay(100, 700)
  setTimeout(() => next(), wait)
})

app.use('/trackers', trackersRouter)
app.use('/dictionary', dictionaryRouter)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

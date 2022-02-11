import express from 'express'

const router = express.Router()

function isKnownWord(word: string) {
  const isOnlyLetters = /^[a-zA-Z]+$/.test(word)
  return word.length > 2 && isOnlyLetters
}

router.get('/has-words', (req, res) => {
  const wordQuery = req.query.word
  if (wordQuery === undefined) {
    res.status(200).send({})
    return
  }
  const words = Array.isArray(wordQuery) ? wordQuery : [wordQuery]
  const results = words
    .map(String)
    .reduce<{ [key: string]: boolean }>((memo, word) => {
      memo[word] = isKnownWord(word)
      return memo
    }, {})
  res.status(200).send(results)
})

export default router

import express from 'express'

const router = express.Router()

export default router.get('/', (req, res, next) => {
  res.status(201).send('Everything Nominal')
})

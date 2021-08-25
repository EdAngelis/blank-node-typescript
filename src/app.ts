/* eslint-disable max-len */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import index from './route/index'
import userRoute from './route/user_route'

dotenv.config()
const { connect } = mongoose
connect(process.env.MONGO_CONNECTION as string,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
if (!process.env.PORT) {
  process.exit(1)
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

app.use('/', index)
app.use('/user', userRoute)

export default app

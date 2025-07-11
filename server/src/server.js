/* eslint-disable no-console */
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { corsOptions } from '~/config/corsOptions'
import { APIs_V1 } from '~/routes/v1/'

const START_SERVER = () => {
  // Init Express App
  const app = express()

  // Fix Cache from disk from ExpressJS
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })
  // Use Cookie
  app.use(cookieParser())

  app.use(cors(corsOptions))

  // Enable req.body json data
  app.use(express.json())

  // Use Route APIs V1
  app.use('/v1', APIs_V1)

  const LOCAL_DEV_APP_PORT = 8017
  const LOCAL_DEV_APP_HOST = 'localhost'
  const AUTHOR = 'EmHuyTapCode'
  app.listen(LOCAL_DEV_APP_PORT, LOCAL_DEV_APP_HOST, () => {
    console.log(`Local DEV: Hello ${AUTHOR}, Back-end Server is running successfully at Host: ${LOCAL_DEV_APP_HOST} and Port: ${LOCAL_DEV_APP_PORT}`)
  })
}

(async () => {
  try {
    // Start Back-end Server
    console.log('Starting Server...')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

import express from 'express'
import cors from 'cors'

const PORT = 5000

const app = express()

app.use(cors())

app.get('/note', (req, res) => {
    res.status(200).json('note form server')
})

/* eslint-disable no-console */
const server = app.listen(PORT, () => console.log('server started'))

export { app, server }

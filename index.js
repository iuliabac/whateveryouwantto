import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hewowo would')
})

app.listen(3000)
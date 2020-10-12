const port = process.env.PORT || 8080;
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello emy, OCP Exam ! by Vikash'))

app.get('/readiness', (req, res) => res.send('Ready !!'))

app.get('/liveness', (req, res) => res.send('Live !!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

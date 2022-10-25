const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const data = require ('./data/courses.json');
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send(data)
})
app.get('/:id', (req, res) => {
    const findCourse = data.find(s => s.id === req.params.id)
  res.send(findCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
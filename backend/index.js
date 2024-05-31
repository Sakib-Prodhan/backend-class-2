const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')

app.use(cors())
app.use(express.json())

const user = [
    {
       name:"Sakib", email:"sakib@gmail.com"
    },
    {
       name:"Rakib", email:"rakib@gmail.com"
    },
    {
       name:"Makil", email:"sakil@gmail.com"
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/user', (req, res) => {
    res.send(user);
  })

  app.post('/userinfo', (req, res) => {
    res.send(req.body);
    let userifo = req.body
    console.log(userifo)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
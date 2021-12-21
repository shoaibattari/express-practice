const { text } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.write('Hello World!')
    res.end()
})

app.get('/form', (req, res) => {
    res.setHeader("content-Type", "text/html")
    res.write("<form action='./submit'  method ='post'>  <input type='text' name ='data'>  <input type='tel' name ='number'>  <button>submit</button></form>")
    res.end()
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
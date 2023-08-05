// insert library express from node_modules
const express = require('express')
const app = express()
const port = 3000
// route 
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello world!')
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

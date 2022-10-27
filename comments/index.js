const express = require('express')
const bodyParser = require('body-parser')
const randomstring = require("randomstring");

const app = express()

let Allcomments = {};
app.use(bodyParser.json());

app.post('/post/:id/comments', (req, res) => {
    const commentID = randomstring.generate(5);
    const { body } = req.body

    const comments = Allcomments[req.params.id] || []
    comments.push({id:commentID, body:body})
    Allcomments[req.params.id] = comments
    res.status(201).send(comments)

})

app.get('/post/:id/comments', (req, res) => {
    const comments = Allcomments[req.params.id] || []

    res.status(200).send(comments)
})



app.listen(4001, () => {
    console.log(`comments app listening on port 4001`)
})
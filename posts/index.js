const express = require('express')
const bodyParser = require('body-parser')
const randomstring = require("randomstring");


const app = express()

allPosts = {};
app.use(bodyParser.json());

app.post('/post',(req, res)=>{
    const id = randomstring.generate(5);
    const {title} = req.body
 
    allPosts[id]={
        id, title
    }

    res.send(allPosts)


})

app.get('/post', (req, res) => {
  res.send(allPosts)
})

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`)
})
const express = require('express')
const app = express()

const fetchPosts = require("./utils/fetchPost");


const port = process.env.PORT ? process.env.PORT : 3000

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

    fetchPosts()
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
})
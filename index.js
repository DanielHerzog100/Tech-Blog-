const express = require('express')

const app = express()

const {
    PORT = 3000
} = process.env

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
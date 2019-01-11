let express = require("express")
let os = require("os")
let app = express()

app.get("/", (req, res, next) => {
    res.send(`Hello from ${os.hostname()}`)
})

app.listen(3000, "0.0.0.0")
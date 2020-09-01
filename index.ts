const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(443, () => {
    console.log("Listening on port 80")
})
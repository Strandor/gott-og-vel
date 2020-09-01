const express = require("express");
import {Request, Response} from "express";
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(80, () => {
    console.log("Listening on port 80")
})
const express = require("express");
import {Request, Response} from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
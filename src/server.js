const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { con } = require("./database/conexaoDb");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;


app.use()

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
})


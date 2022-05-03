import express from "express"
import knex from "knex"
import knexfile from "knex"

const app = express()
const db = knex(knexfile)

const port = 3000
app.listen(port, () => console.log(`Listening on : ${port}`))

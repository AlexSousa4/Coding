const express = require('express')
const uuid = require('uuid')
let cors = require('cors')

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());


const users = []
const checkUserId = (request, response, next) => {
    const userId = request.params
    const index = users.findIndex (user => user.id === id)
    if (index < 0) {
        return response.status (404).json({error:"User Not Found"})
    }
    request.userIndex = index
    request.userId = id
    next()
}

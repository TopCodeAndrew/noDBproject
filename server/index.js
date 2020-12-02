const express = require('express')
const app = express()
const SERVER_PORT = 4567
const controllers = require('./controllers')

app.use(express.json())


// This is the ComponentDidMount endpoint
app.get('/api', controllers.sendShapes)
app.put('/api/:shape_key', controllers.updateSpecificShape)
app.post('/api', controllers.createShape)
app.delete('/api', controllers.totalReset)





app.listen(SERVER_PORT, () => console.log(`noDB Project is up and running on port ${SERVER_PORT}.`))
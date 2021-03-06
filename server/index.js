const express = require('express')
const app = express()
const SERVER_PORT = 4567
const controllers = require('./controllers')

app.use(express.json())



// This is the ComponentDidMount endpoint
app.get('/api/shapes', controllers.sendShapes)
app.put('/api/shapes/individual:shape_key', controllers.updateSpecificShape)
app.delete('/api/shapes/individual:shape_number', controllers.deleteOneShape)
app.put('/api/shapes/nameindividual', controllers.nameIndividual)
app.post('/api/shapes/individual', controllers.createShape)
app.delete('/api/shapes', controllers.totalReset)
app.put('/api/shapes/change-color', controllers.redOverRide)





app.listen(SERVER_PORT, () => console.log(`noDB Project is up and running on port ${SERVER_PORT}.`))
process.env.PORT = 9091
process.env.Tz = 'UTC'

const helper = require('./helper')
const bodyparser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyparser.text())

app.post('/', (req, res) => {
    const dateTime = helper.getTime()
    if (req.body) {
        const messageToLog = `${dateTime}-${req.body}`
        helper.writeToFile(messageToLog)
    } else {
        console.log('localIp_not_found')
    }
    res.send('done')
})


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Startup_Exception ' + err.message)
        throw err
    }
    console.log('Server up and running PORT=' + process.env.PORT)
})
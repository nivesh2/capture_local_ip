process.env.PORT = 9091
process.env.Tz = 'UTC'

const path = require('path')
const helper = require('./helper')
const bodyparser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyparser.text())

/*
 * serve index.html page which will grab the IP address
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

/*
 * capture users local ip address and log into local server file
 */
app.post('/save_message', (req, res) => {
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
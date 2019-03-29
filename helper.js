const fs = require('fs');
const path = require('path')

const fileName = 'data.log'
exports.writeToFile = (data) => {
    fs.appendFile(path.join(__dirname, fileName), data + '\n', { encoding: 'utf-8' }, (err) => { 
        if (err) { 
            console.log('Error Writing to file')
        }
    })
}
exports.getTime = () => {
    const time = new Date()
    return time.toISOString()
}
const fs = require('fs')
const path = require('path')

module.exports = {
  getBandsData
}

function getBandsData (callback) {
  const filepath = path.join(__dirname, 'data.json')
  fs.readFile(filepath, 'utf-8', (err, contents) => {
    if (err) {
      callback(new Error(err.message))
    } else {
      const bandsData = JSON.parse(contents)
      callback(null, bandsData)
    }
  })
}
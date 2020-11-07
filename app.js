// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbisTalk = require('./talk_rubbish')
const app = express()
const port = 3000


// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  //console.log('req.body', req.body)
  const occupation = req.body;
  const options = generateRubbisTalk(occupation['occupation'])
  res.render('index', { options: options })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
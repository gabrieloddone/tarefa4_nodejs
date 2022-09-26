const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/produtos', (req, res) => {
  const produtos = [
  {
    title: 'iPhone 13',
    brand: 'Apple',
    body: '128gb',
    price: 8000
  },
  {
    title: 'S22 Ultra',
    brand: 'Samsung',
    body: '256gb',
    price: 7000
  },
  {
    title: 'Redmi Note 8',
    brand: 'Xiaomi',
    body: '128gb 4gb RAM',
    price: 1500
  }
]

  res.render('produtos', {produtos})
})

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(8888, () => {
  console.log('App rodando')
})
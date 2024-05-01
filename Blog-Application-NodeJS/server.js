const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
var cors = require('cors')
const app = express()

//for connection with mongo db
mongoose.connect('mongodb://localhost/blogapp', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

//set ejs view-engine
app.set('view engine', 'ejs')

//settings for body parsing and for use json
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'))
app.use(cors());

//used to get all the blog/articles in desc. order
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.send(articles)
})

//all the route starts with /articles handles here
app.use('/articles', articleRouter)

//server runs on port 4000
app.listen(4000)
const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

//used to get one article/blog according to saved slug
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
    res.send(article)
})

//used to save blog data which post from UI
router.post("/", async(req, res) => {
  const article = new Article({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  })
  try{
      await article.save();
  }catch(e){
    console.log(e);
  }
});

// for update particular blog data {param:id}
router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, editArticle())

//delete blog as per id
router.delete('/:id', async (req, res) => {
  var deletedData = await Article.findByIdAndDelete(req.params.id)
  res.send(deletedData)
})

//seperate function for edit/update blog data
function editArticle() {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.category = req.body.category
    article.description = req.body.description
    try {
      article = await article.save()
    } catch (e) {
      console.log(e);
    }
  }
}

//router exporing
module.exports = router
const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res) =>{
   // res.sendFile(path.join(__dirname, '../templates/index.html'))
   res.render('home')
})

router.get('/blog', (req, res) =>{
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });
   // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
   res.render('bloghome', {
    blogs: blogs
   })
})

router.get('/blogPost/:slug', (req, res) =>{
    myBlog = blogs.filter((e) =>{
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
       })
    //console.log(myBlog)
    //res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router;

import express from "express";
import bodyParser from "body-parser";
// import dirname from "path";
// import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let blogPosts = [];
let nextPostId = 1;
// const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

// Static files
app.use(express.static("public"));

// Functionality
app.get("/", (req, res)=>{
    res.render("index.ejs", { blogPosts: blogPosts });
});

app.get("/blog/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === postId);
    
    if (post) {
        res.render("view-blog.ejs", { post: post });
    } else {
        res.status(404).send("Blog post not found");
    }
});

app.get("/start-a-blog", (req, res)=>{
    res.render("blog.ejs");
});

app.post("/publish", (req, res)=>{
    const title = req.body["title"];
    const content = req.body["text-content"];
    const post = {
        id: nextPostId++,
        title: title,
        content: content,
        date: new Date()
    }

    blogPosts.push(post);
    
    // Redirect to home page
    res.redirect("/");
});

// Listen on port 3000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
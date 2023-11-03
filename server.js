const express=require('express');
const app=express();
const {MongoClient} = require("mongodb");
const PORT = process.env.PORT || 5000;

app.use(express.json({extended:false}));
app.get('/api/articles/:name', async (req,res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("quillquest");
        const articleInfo = await db
        .collection('articles')
        .findOne({name: articleName});
        res.status(200).json(articleInfo);
        client.close();   
    } catch (error) {
        res.status(500).json({message: "Error Connecting to Database!",error})
    }
});
app.post('/api/articles/:name/add-comments', (req, res)=>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    ArticlesInfo[articleName].comments.push({username,text});
    res.status(200).send(ArticlesInfo[articleName]);
});
app.listen(PORT, ()=> console.log(`Started at ${PORT}`));

const express=require("express");
const mongoose=require("mongoose")
const searchRoute = require('./Routing/modelrouter');
const categoryRoute = require("./Routing/categories");
const Port=8000;
const app=express()
// app.use(express.json())
const cors=require("cors")
// const blog = require("./Routing/blog");
app.use(cors())

const uri = 'mongodb+srv://ersukhmanpreetkaur:ecommerce@cluster0.huz1uyq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err));

// Middleware to parse JSON
app.use(express.json());

// Use the search route
app.use('/api', searchRoute);

app.get('/api/search', (req, res) => {
        
        const searchTerm = req.query.q; 
        res.json({ results: [] }); 
      });
app.use("/api",categoryRoute);
app.get('/',(req,res)=>{
        console.log('Homme page')
     res.send('API is running fine')   
})


app.listen(8000,()=>{
        try{
                console.log(`Server is running fine-${Port}`)
        }
        catch(err){
                console.log(`Error occured in the code-${err}`)
        }
})













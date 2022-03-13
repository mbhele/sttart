
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

  app.use(express.static(path.join(__dirname, '../client/build')))

app.get("/api", (req,res) => {

         res.json({ 
         message:"Vula nda" 
        })
    
})

     app.get("*", (res,res)=>{
         res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
     })


app.listen(PORT, ()=>{

     console.log('Server listening on port '+PORT);
});
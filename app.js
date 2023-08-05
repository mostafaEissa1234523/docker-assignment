const express = require('express');
const app = express();
const PORT= 8080;
app.use("/",(req,res)=>{
    res.status(200).json({msg:"SUCCESS"});
})
app.listen(PORT,()=>{console.log(`Server started at PORT ${PORT}`)});
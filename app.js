//external module
const express=require("express");
//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page not found.</h1>`);
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
});
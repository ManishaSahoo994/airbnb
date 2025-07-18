//external module
const express=require("express");
//core module
const path = require("path");
//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
});
//external module
const express=require("express");
//core module
const path = require("path");
//local module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/error");

const app=express();
//ejs setup
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(errorController.pageNotFound);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
});
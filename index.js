const express = require("express")
const app = express();

const port = 2000;


function startserver() {
    console.log("Hii  Js code running succesfuly")
}

app.listen(port,startserver);


function lw(request,response) {
    response.send("Hii Welcome")
    console.log("somebody touch the......")
}


function lwhome(request,response){
    response.sendFile(__dirname+'/home.html')
    console.log("somebody touch this page....")
}



function login(request,response){
     response.sendFile(__dirname+'/login.html')
}

app.get('/login',login)
app.get('/home',lwhome)

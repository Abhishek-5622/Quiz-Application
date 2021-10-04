// *************************Exprees Js******************************

// require('dotenv').config();
// ************connection to db******************
// require('./Db/conn');
// ***********Moules require*********************
var express = require("express")
var bodyParser = require("body-parser")
const path = require('path');
var passport = require('passport');
const cookieParser = require('cookie-parser')
// ************Model(Schema)**********************

// *****************Route file**********************

//***************Auth middleware******************



// get port
const port = process.env.PORT || 3000;

// express app
const app = express();

const staticpath = path.join(__dirname, "/public")
app.use(bodyParser.json())
app.use(express.static("public"));
app.use(cookieParser())


// routing and API Call
app.get('/', (req, res) => {
    res.status(200).sendFile('index.html')
})





// listen to a port
app.listen(port, () => {
    console.log("server is running: " + port)
})


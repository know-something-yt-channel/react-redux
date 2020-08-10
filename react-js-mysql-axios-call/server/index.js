const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const PORT = 4002;
app.use(cors());  
app.use(bodyParser.json());


let userServicesObj = require('./Services/UserServices')(app);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

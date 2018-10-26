let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) =>{
    if(err){
        console.log(err);
        process.exit(1);
    }
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes/tag.route.js')(app);

let port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.json({"message": "Welcome to logger api"})
});

app.listen(port);
console.log("Listening on port: " + port);
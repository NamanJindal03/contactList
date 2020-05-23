const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );
app.use(express.static('assets'));
 
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('Error');
        return;
    }
    console.log('Server is succesfully running at port:' + port);
})
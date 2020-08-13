const express = require('express');
const app = express();
const weatherAPIKey = '9608559ef94c49daa9a131229201308LIVE';

app.set('view engine','hbs');
app.set('views','./public/views');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('index',{});
});

app.post('/',(req,res) => {
    console.log(req.body.place,req.body.date);
    res.send('hello');
});

app.listen(8000,() => {
    console.log("Server started on port",8000);
});
const express = require('express');
const app = express();

app.set('view engine','hbs');
app.set('views','./public/views');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('index',{});
});

app.listen(8000,() => {
    console.log("Server started on port",8000);
});
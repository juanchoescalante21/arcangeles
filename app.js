const express = require('express');
const app = express();
const path = require('path');
const port = 3002;
const views = path.join(__dirname,'views');
app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(views, 'index.html')));
app.get('/jofiel',(req,res) => res.sendFile(path.join(views, 'jofiel.html')));
app.get('/miguel',(req,res) => res.sendFile(path.join(views, 'miguel.html')));
app.get('/rafael',(req,res) => res.sendFile(path.join(views, 'rafael.html')));
app.get('/chamuel',(req,res) => res.sendFile(path.join( views, 'chamuel.html')));
app.get('/uriel',(req,res) => res.sendFile(path.join( views, 'uriel.html')));
app.get('/gabriel',(req,res) => res.sendFile(path.join( views, 'gabriel.html')));
app.get('/zadkiel',(req,res) => res.sendFile(path.join( views, 'zadkiel.html')));



app.listen(port, () => console.log('Server ON: Port ' + port))
const express = require('express')
const path = require('path')
const app = express()
POST = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'introduction.html'));
});

app.get('/puzzle-1', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle1.html'))
})

app.get('/puzzling', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle2.html'))
})

app.get('/final', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'welcome.html'))
})

app.listen(POST, () =>{
    console.log(`Server is running on http://localhost:${POST}`);
});
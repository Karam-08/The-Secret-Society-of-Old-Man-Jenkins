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

app.get('/puzzle-1/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle1hint.html'))
})

app.get('/puzzling', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle2.html'))
})

app.get('/puzzling/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle2hint.html'))
})

app.get('/shadow', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle3.html'))
})

app.get('/shadow/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle3hint.html'))
})

app.get('/610', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle4.html'))
})

app.get('/610/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle4hint.html'))
})

app.get('/secret-society', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle5.html'))
})

app.get('/secret-society/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle5hint.html'))
})

app.get('/nothing', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle6.html'))
})

app.get('/nothing/hint', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'puzzle6hint.html'))
})

app.get('/16385', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'welcome.html'))
})

app.listen(POST, () =>{
    console.log(`Server is running on http://localhost:${POST}`);
});
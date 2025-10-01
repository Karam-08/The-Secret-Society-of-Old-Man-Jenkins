const express = require('express')
const path = require('path')
const app = express()
POST = 3000

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'introduction.html'));
});

app.listen(POST, () =>{
    console.log(`Server is running on http://localhost:${POST}`);
});
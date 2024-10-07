const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const root = require('./routes/root.js')

app.use(root)

app.listen(PORT, () => {
    console.log(`server running at http://localhost:3000`)
})
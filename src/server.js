const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const root = require('./routes/root.js');
const kpu = require('./routes/kpu.js');

app.use(express.json());

app.use(root);
app.use(kpu);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
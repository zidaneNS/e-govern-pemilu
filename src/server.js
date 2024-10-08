const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const root = require('./routes/root.js');
const kpu = require('./routes/kpu.js');

app.use(express.json());
app.use(cors());

app.use(root);
app.use(kpu);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
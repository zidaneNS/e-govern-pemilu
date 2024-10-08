const express = require('express');
const app = express();
const cors = require('cors');
const api_key = require('./middleware/api_key.js');
const PORT = process.env.PORT || 5000;

const root = require('./routes/root.js');
const kpu = require('./routes/API/kpu.js');

app.use(express.json());
app.use(cors());
app.use(api_key);

app.use(root);
app.use(kpu);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
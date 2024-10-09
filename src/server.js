const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// mengambil custom middleware
const api_key = require('./middleware/api_key.js');
const root = require('./routes/views/root.js');
const profil_pemerintah = require('./routes/API/profil_pemerintah.js');
const profil_panitia = require('./routes/API/profil_panitia.js');

app.use(express.json());
app.use(cors());

app.use(root);
app.use('/api', api_key);
app.use('/api/kpu/profil_pemerintah', profil_pemerintah);
app.use('/api/kpu/profil_panitia', profil_panitia);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
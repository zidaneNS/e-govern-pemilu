const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;

const api_key = require('./middleware/api_key.js');
const root = require('./routes/root.js');
const profil_pemerintah = require('./routes/API/profil_pemerintah.js');
const profil_panitia = require('./routes/API/profil_panitia.js');
const partai = require('./routes/API/partai.js');
const caleg = require('./routes/API/caleg.js');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use(root);

app.use('/api', api_key);
app.use('/kpu/uploads', express.static(path.join(__dirname, 'public', 'img')));
app.use('/api/kpu/profil_pemerintah', profil_pemerintah);
app.use('/api/kpu/profil_panitia', profil_panitia);
app.use('/api/kpu/partai', partai);
app.use('/api/kpu/caleg', caleg);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

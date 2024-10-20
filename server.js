const express = require('express');
const bodyParser = require('body-parser');
const clientsRoutes = require('./routes/contactsRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/contatos', clientsRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
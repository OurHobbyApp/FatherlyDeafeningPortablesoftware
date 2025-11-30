const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('public'));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, email, service, message } = req.body;
  
  const contactData = {
    id: Date.now(),
    name,
    phone,
    email,
    service,
    message,
    date: new Date().toISOString()
  };

  // Store in a JSON file
  const dataFile = path.join(__dirname, 'contacts.json');
  let contacts = [];
  
  try {
    if (fs.existsSync(dataFile)) {
      contacts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    }
  } catch (err) {
    contacts = [];
  }

  contacts.push(contactData);
  fs.writeFileSync(dataFile, JSON.stringify(contacts, null, 2));

  console.log('New contact submission:', contactData);
  
  res.json({ success: true, message: 'Contact form submitted successfully' });
});

// Get all contacts (admin endpoint)
app.get('/api/contacts', (req, res) => {
  const dataFile = path.join(__dirname, 'contacts.json');
  
  try {
    if (fs.existsSync(dataFile)) {
      const contacts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      res.json(contacts);
    } else {
      res.json([]);
    }
  } catch (err) {
    res.json([]);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Afford A Build website running on port ${PORT}`);
});

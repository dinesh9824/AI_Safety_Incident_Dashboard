const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const incidentsFile = path.join(__dirname, '..', 'incidents.json');
const usersFile = path.join(__dirname, '..', 'users.json');

// GET all incidents
app.get('/api/incidents', (req, res) => {
  fs.readFile(incidentsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read incidents' });
    res.json(JSON.parse(data));
  });
});

// POST a new incident
app.post('/api/incidents', (req, res) => {
  const { title, description, severity } = req.body;
  fs.readFile(incidentsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read incidents' });
    const incidents = JSON.parse(data);
    const newId = incidents.length > 0 ? Math.max(...incidents.map(i => i.id)) + 1 : 1;
    const newIncident = {
      id: newId,
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    incidents.push(newIncident);
    fs.writeFile(incidentsFile, JSON.stringify(incidents, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write incidents' });
      res.json(newIncident);
    });
  });
});

// POST to register a user
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  fs.readFile(usersFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read users' });
    const users = JSON.parse(data);
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    fs.writeFile(usersFile, JSON.stringify(users, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to write users' });
      res.json({ message: 'User registered successfully' });
    });
  });
});

// POST to login a user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  fs.readFile(usersFile, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read users' });
    const users = JSON.parse(data);
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    res.json({ message: 'Login successful' });
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
}); 
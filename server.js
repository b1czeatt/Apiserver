const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { firstName: "Harry", lastName: "Potter" },
  { firstName: "Ronald", lastName: "Bilius Weasley" },
  { firstName: "Hermione", lastName: "Jean Granger" },
  { firstName: "Draco", lastName: "Malfoy" },
  { firstName: "Cedric", lastName: "Diggory" },
  { firstName: "Luna", lastName: "Lovegood" }
];


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.json({});
  }
});


app.post('/users', (req, res) => {
  const { firstName, lastName } = req.body;
  users.push({ firstName, lastName });
  res.status(201).json({ firstName, lastName });
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName } = req.body;

  if (id >= 0 && id < users.length) {
    users[id] = { firstName, lastName };
    res.json({ firstName, lastName });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName } = req.body;

  if (id >= 0 && id < users.length) {
    if (firstName) users[id].firstName = firstName;
    if (lastName) users[id].lastName = lastName;
    res.json(users[id]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id >= 0 && id < users.length) {
    users.splice(id, 1);
    res.json({ message: "Delete successful" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

t
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

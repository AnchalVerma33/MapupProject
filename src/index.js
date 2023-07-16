const express = require('express');
const cors = require('cors');
const { router } = require('./routes/route');

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use('/api', router);

// Generate JWT token for testing purposes
// app.post('/login', (req, res) => {
//   // You can implement your own logic for user authentication
//   const { username, password } = req.body;

//   // Example: Authenticate the user
//   if (username === 'Anchal' && password === 'anchal@1234') {
//     const token = jwt.sign({ username }, secretKey, { expiresIn: '10d' });
//     console.log({token : token})
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

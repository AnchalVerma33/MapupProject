const express = require('express');
const cors = require('cors');
const { router } = require('./routes/route');
const configVar = require('./config/index');

const PORT = configVar.PORT || 3000;

const app = express();
// For larger payload data limit is extended upto 20mb
app.use(express.json({ limit: '20mb' }));
app.use(cors());
app.use('/api', router);
// Url: https://mapupproject.onrender.com/api/check-intersections'
app.use('/', (req, res) => res.send({
  message:
      'Mapup Project is running Successfully please visit given url => https://mapupproject.onrender.com/api/check-intersections',
}));


// Start the server
// Default Port : 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

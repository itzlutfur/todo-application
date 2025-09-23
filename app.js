const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the auth routes
const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



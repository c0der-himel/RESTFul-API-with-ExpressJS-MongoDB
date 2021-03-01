const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World');
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((result) => {
        app.listen(PORT, () => {
            console.log('Connected to Database');
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

const express = require('express');

const booksRouter = require('./routes/books');

const app = express();

app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

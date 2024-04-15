const express = require('express');
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db.config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    res.send('Service is up and running');
})

// last middleware if any error comes up
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
    connectDB().then(() => console.log('Database Connected!!'))
})

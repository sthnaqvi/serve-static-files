/**
 * Created by Tauseef Naqvi on 15-02-2018.
 */

const express = require('express');
const path = require('path');
const app = express();
const utils = require('./utils');
const config = require('./config');

//location from this directory change form config file
const appPath = path.join(__dirname, config.location);

//change port from config file
const port = config.port;

app.use(express.static(appPath));

app.get('*', (req, res) => {
    utils.logMe(req,res);
    res.sendFile(appPath + '/index.html');
});

app.listen(port, () => console.log(`Server running on localhost: ${port}`));

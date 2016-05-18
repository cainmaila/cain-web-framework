// ============================================================================  _       __     __       _____                          
// | |     / /__  / /_     / ___/___  ______   _____  _____
// | | /| / / _ \/ __ \    \__ \/ _ \/ ___/ | / / _ \/ ___/
// | |/ |/ /  __/ /_/ /   ___/ /  __/ /   | |/ /  __/ /    
// |__/|__/\___/_.___/   /____/\___/_/    |___/\___/_/     
// ============================================================================

"use strict";

const config = require('../config.json'); //外部設定檔
const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const express_ipv4 = require('express-ipv4');
const session = require('express-session');

const request = require('request-promise'); //外呼叫工具
const port = process.env.PORT || config.port || 80;
const app = express();

// set cores..
const whitelist = config.whitelist;
const corsOptions = {
    origin: function(origin, callback) {
        let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    }
};

app.set('trust proxy', 1); //session 信任第2組中介處理
app.use(compression()); //gzip 壓縮
app.use(session({
    secret: config.secretKet,
    resave: false,
    saveUninitialized: true,
}));
app.use(express_ipv4());
app.use(cors(corsOptions));
app.use(methodOverride()); //可以使用put和delete
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// index
app.get('/', (req, res) => {
    let view = 'index';
    res.sendFile(path.join(__dirname, '..', 'view', view + '.html'));
});

// static file
app.use(express.static(path.join(__dirname, '..', 'www')));

// error handle
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(status404);

// listen..
app.listen(port, function() {
    console.log('white list:', whitelist);
    console.log("runing Web Server in " + port + " port...");
});


// ============================================================================
//     __________  ____  ____  ____     __  __                ____   
//    / ____/ __ \/ __ \/ __ \/ __ \   / / / /___ _____  ____/ / /__ 
//   / __/ / /_/ / /_/ / / / / /_/ /  / /_/ / __ `/ __ \/ __  / / _ \
//  / /___/ _, _/ _, _/ /_/ / _, _/  / __  / /_/ / / / / /_/ / /  __/
// /_____/_/ |_/_/ |_|\____/_/ |_|  /_/ /_/\__,_/_/ /_/\__,_/_/\___/ 
// ============================================================================

//以下錯誤狀態
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
};

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
};

function status404(req, res) {
    res.status(404).send("404 error");
}

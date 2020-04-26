const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const socketIo = require("socket.io");

/**
 * words are objects of the form:
 * {
 *    word: "some text",
 *    created_at: "2020-04.25 12:00"
 * }
 */
const words = [];

const port = process.env.PORT || 4001;

const app = express();

/**
 * CREATE A SERVER OBJECT
 */
const server = http.createServer(app);

/**
 * SERVER CONFIGURATION
 */

 // ensure the server can call other domains: enable cross origin resource sharing (cors) 
app.use(cors());

// received packages should be presented in the JSON format
app.use(bodyParser.json());

// show some helpful logs in the commandline
app.use(morgan("dev"));

/**
 * PLACE THE ROUTE CONFIGURATIONS HERE
 */


/**
 * START THE SERVER
 */
server.listen(port, () => console.log(`Listening on port ${port}`));

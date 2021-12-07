// Dependencies
const express = require("express");
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});
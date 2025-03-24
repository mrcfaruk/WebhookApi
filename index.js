const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/data", (req, res) => {
    const data = req.body;
    res.json({ message: "Data received successfully", data });
});

app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});

module.exports = app;

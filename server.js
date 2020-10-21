const express = require("express");
const path = require("path");
const table = require("./data/tableData.js")
const waitlist = require("./data/waitinglistData.js")
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/tables", function (req, res) {
    res.json(table);
});
app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
});
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
  
app.post("/api/tables", function(req, res) {
    if (table.length < 5) {
        table.push(req.body);
        console.log("YOU GOT YOSELF")
    }else {
        waitlist.push(req.body);
    }
})


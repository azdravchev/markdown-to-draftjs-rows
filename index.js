const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { markdownToDraft } = require("markdown-draft-js");

let PORT = 9000;
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/convert", async (req, res) => {
    const data = req.body;
    if(data.markdown) {
        const rawObject = markdownToDraft(data.markdown);
        console.log(rawObject);
        return res.status(200).send(rawObject)
    }
    res.setH.status(400).send("not valid")
});

app.get("/", function(req, res) {
    res.sendFile('./index.html', {root: __dirname })
});

app.listen(PORT, function() {
    console.log("Running server ", PORT);
});
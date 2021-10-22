module.exports = (entryFileName, entryPort) => {
    const express = require('express');
    const fs = require('fs');


    const app = express();

    let fileName = entryFileName || 'db.json',
        port = entryPort || 4000;


    try {

        const fileContent = fs.readFileSync(`./${fileName}`, "utf8");
        let newFileContent = JSON.parse(fileContent);

        app.get('/', (req, res) => {
            res.json(newFileContent);
        });

        app.post('/', (req, res) => {
            res.json({ response: "POST Request / 200" });
        });

        app.listen(port, () => {
            console.log(`\nRunning Port: ${port}`);
        });

        console.log(fileContent);

    } catch {
        console.log("The File Can\'t Be Handled!");
    }
}
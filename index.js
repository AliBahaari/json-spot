module.exports = (entryFileName, entryPort) => {
    const express = require('express');
    const fs = require('fs');


    const app = express();

    let fileName = entryFileName || 'db.json',
        port = entryPort || 4000;


    try {

        const fileContent = fs.readFileSync(`./${fileName}`, "utf8");

        app.get('/', (req, res) => {
            res.json(fileContent);
        });

        app.listen(port, () => {
            console.log(`\nRunning Port: ${port}`);
        });

        console.log(fileContent);

    } catch {
        console.log("The File Can\'t Be Handled!");
    }
}
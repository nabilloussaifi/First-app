const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES


const addNameToDb = (compNameFromBrain) => {
    console.log("from the back", compNameFromBrain)
    let db = new sqlite3.Database('./db/db.database');

    // insert one row into the langs table
    db.run(`INSERT INTO compnames(name) VALUES(?)`, [compNameFromBrain.input], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

    // close the database connection
    db.close();
}



const addSelectToDb = (selectFromBrain) => {
    console.log
}



const getNameFromDb = (res) => {
    // console.log("getting name")

    let dataForFront = { names: [] }
    let db = new sqlite3.Database('./db/db.database');

    let sql = `SELECT name FROM compnames`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
            dataForFront.names.push(row)
        });
        console.log(dataForFront)
        res.send(dataForFront)
    });

    // close the database connection
    db.close();
}



exports.addNameToDb = addNameToDb
exports.getNameFromDb = getNameFromDb
//This creates the final database to house the user profile information (username, password), along with total page time and total page visits for each of the individual regions and conditions, which are later used for logging in and data visualization.


// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the pets.db1 file
//   node create_database.js

// to clear the database, simply delete the pets.db1 file:
//   rm pets.db1

const sqlite3 = require('sqlite3');
const db2 = new sqlite3.Database('tracking.db');
// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db2.serialize(() => {
  // create a new database table:

  //db2.run ("CREATE TABLE track_time (page TEXT, avgtime TEXT,  totaltime TEXT, visits TEXT)");
  db2.run("CREATE TABLE track_time (type TEXT, time1 TEXT, visits1 TEXT, time2 TEXT, visits2 TEXT, time3 TEXT, visits3 TEXT, time4 TEXT, visits4 TEXT)");

  // insert rows of data for regions:

  db2.run("INSERT INTO track_time VALUES ('avgTime', '40 min', '7 times', '30 min', '6 times', '9 min', '5 times', '17 min', '17 times')");
  db2.run("INSERT INTO track_time VALUES ('totalTime', '80 min', '7 times', '37 min', '6 times', '15 min', '5 times', '29 min', '17 times')");

  //db2.run("INSERT INTO track_time('Hindbrain','40 min', '80 min', '7 times')");
  //db2.run("INSERT INTO track_time('Alzheimer''s', '30 min', '37 min', '6 times')");
  //db2.run("INSERT INTO track_time('Forebrain', '9 min', '15 min', '5 times')");
  //db2.run("INSERT INTO track_time('Stroke', '17 min', '29 min'. '17 times')");


  console.log('successfully created the track_time table in tracking.db');

  // print them out to confirm their contents:
  db2.each("SELECT type, time1, visits1, time2, visits2, time3, visits3, time4, visits4 FROM track_time", (err, row) => {
      console.log(row.type + row.time1 + row.visits1 + row.time2 + row.visits2 + row.time3 + row.visits3 + row.time4 + row.visits4);
  });

});

db2.close();



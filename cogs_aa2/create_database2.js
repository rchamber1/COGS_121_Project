// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the pets.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm pets.db

const sqlite3 = require('sqlite3');
const userdb = new sqlite3.Database('pets.db');


// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
userdb.serialize(() => {
  // create a new database table:
  userdb.run("CREATE TABLE users_to_pets (name TEXT, password TEXT)");

  // insert 3 rows of data:
  userdb.run("INSERT INTO users_to_pets VALUES ('Amparo', 'dance')");
  userdb.run("INSERT INTO users_to_pets VALUES ('Ellisa', 'dance')");
  userdb.run("INSERT INTO users_to_pets VALUES ('Ryan', 'dance')");

  console.log('successfully created the users_to_pets table in pets.db');

  // print them out to confirm their contents:
  userdb.each("SELECT name, password FROM users_to_pets", (err, row) => {
      console.log(row.name + ": " + row.password );
  });
});

userdb.close();
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
const db1 = new sqlite3.Database('conditions.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db1.serialize(() => {
  // create a new database table:
  db1.run("CREATE TABLE url_to_image (url TEXT, title TEXT, subtitle TEXT, description TEXT, symptom TEXT, treatment TEXT, image TEXT )");

  // insert 4 rows of data for regions:
  db1.run("INSERT INTO url_to_image VALUES ('Alzheimers', 'Alzheimer''s Disease', 'subtitle of Alzheimer''s Disease', 'A progressive disease that destroys memory and other important mental functions.', 'symptoms of Alzheimer', 'treatment of Alzheimer','img/Parkinsons_Icon.png')");
  db1.run("INSERT INTO url_to_image VALUES ('Parkinsons', 'Parkinson''s Disease', 'subtitle of Parkinson''s Disease', 'A disorder of the central nervous system that affects movement, often including tremors.', 'symptoms of Parkinson', 'treatment of Parkinson','image of Parkinson')");
  db1.run("INSERT INTO url_to_image VALUES ('Seizure','Seizure', 'subtitle of Seizure', 'A seizure is a sudden surge of electrical activity in the brain.', 'symptoms of Seizure', 'treatment of Seizure',' images of Seizure comparison')");
  db1.run("INSERT INTO url_to_image VALUES ('Stroke','Stroke', 'subtitle of Stroke', 'Damage to the brain from interruption of its blood supply.', 'symptoms of Stroke', 'treatment of Stroke','image of Stroke')");
  db1.run("INSERT INTO url_to_image VALUES ('ALS', 'ALS', ' Lou Gehrig''s Disease(Amyotrophic Lateral Sclerosis - A.L.S.)', 'A nervous system disease that weakens muscles and impacts physical function.', 'symptoms of ALS', 'treatment of ALS','image of ALS')");
  db1.run("INSERT INTO url_to_image VALUES ('MS', 'Multiple Sclerosis', 'M.S.', 'A disease in which the immune system eats away at the protective covering of nerves.', 'symptoms of M.S.', 'treatment of M.S.','image of M.S.')");


  console.log('successfully created the url_to_image table in regions_detail.db1');

  // print them out to confirm their contents:
  db1.each("SELECT url, title, subtitle, description, symptom, treatment, image FROM url_to_image", (err, row) => {
      console.log(row.url + row.title + "& " + row.subtitle + ' - ' + row.symptom + row.treatment + ' - ' + row.image);
  });
});

db1.close();
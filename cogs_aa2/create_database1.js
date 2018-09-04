//This creates the databse for the conditions page, simiarly storing the conditions information for each of the available brain conditions (including Alzheimer's, stroke, etc.).

                                                                                                                                          
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
  db1.run("INSERT INTO url_to_image VALUES ('Alzheimers', 'Alzheimer''s Disease', '', 'A progressive disease that destroys memory and other important mental functions.', 'The symptoms of Alzheimer''s disease often come on slowly. It might start when someone has trouble recalling things that just happened or putting thoughts into words. But over time, the problems get worse. People in the later stages of the disease usually can''t live alone or care for themselves.', 'No cure exists, but medications and management strategies may temporarily improve symptoms.','img/alzheimer_brain.jpg')");

  db1.run("INSERT INTO url_to_image VALUES ('Parkinsons', 'Parkinson''s Disease', '', 'A disorder of the central nervous system that affects movement, often including tremors.', 'Parkinson''s often starts with a tremor in one hand. Other symptoms are slow movement, stiffness, and loss of balance.', 'There are many medications available to treat the Parkinson''s symptoms, although none yet that reverse the effects of the disease. It is common for people with PD to take a variety of these medications — all at different doses and at different times of day — to manage symptoms.','../img/parkinson_brain.jpg')");

  db1.run("INSERT INTO url_to_image VALUES ('Seizure','Seizure', '', 'A seizure is a sudden surge of electrical activity in the brain.', 'A sudden feeling of fear or anxiousness, a feeling of being sick to your stomach, dizziness, a change in vision, a jerky movement of the arms that may cause you to drop things, an out of body sensation, or a headache among others.', 'Treatments for seizures depend on the cause. By treating the cause of the seizures, you may be able to prevent future seizures from occurring. Some treatments may include medications, surgery to correct brain abnormalities, nerver stimulation, or a simple diet known as ketogenic diet.',' ../img/seizure_brain.jpg')");

  db1.run("INSERT INTO url_to_image VALUES ('Stroke','Stroke', '', 'Damage to the brain from interruption of its blood supply.', 'Symptoms of stroke include trouble walking, speaking, and understanding, as well as paralysis or numbness of the face, arm, or leg.', 'Ischemic strokes are caused by arteries being blocked or narrowed, and so treatment focuses on restoring an adequate flow of blood to the brain. Hemorrhagic strokes are caused by blood leaking into the brain, so treatment focuses on controlling the bleeding and reducing the pressure on the brain.','../img/stroke_brain.jpg')");

  db1.run("INSERT INTO url_to_image VALUES ('ALS', 'Lou Gehrig''s Disease', '(Amyotrophic Lateral Sclerosis - A.L.S.)', 'A nervous system disease that weakens muscles and impacts physical function.', 'ALS is typically a disease that involves a gradual onset. Gradual onset, generally painless, progressive muscle weakness is the most common initial symptom in ALS. Other early symptoms vary but can include tripping, dropping things, abnormal fatigue of the arms and/or legs, slurred speech, muscle cramps and twitches, and/or uncontrollable periods of laughing or crying.', 'Treatments canot reverse the damage of amyotrophic lateral sclerosis, but they can slow the progression of symptoms, prevent complications, and make you more comfortable and independent. Two medications are currently approved by the FDA for the treatment of ALS; Riluzole(Rilutek) and Edaravone(Radicava). There are also many different types of therapies to slow this process.', '../img/als_brain.jpg')");

  db1.run("INSERT INTO url_to_image VALUES ('MS', 'Multiple Sclerosis', 'M.S.', 'A disease in which the immune system eats away at the protective covering of nerves.', 'Multiple sclerosis causes many different symptoms, including vision loss, pain, fatigue, and impaired coordination. The symptoms, severity, and duration can vary from person to person. Some people may be symptom free most of their lives, while others can have severe chronic symptoms that never go away.', 'Physical therapy and medications that suppress the immune system can help with symptoms and slow disease progression.','../img/ms_brain.jpg')");


  console.log('successfully created the url_to_image table in regions_detail.db1');

  // print them out to confirm their contents:
  db1.each("SELECT url, title, subtitle, description, symptom, treatment, image FROM url_to_image", (err, row) => {
      console.log(row.url + row.title + "hello" + row.subtitle + row.symptom + row.treatment + row.image);
  });
});

db1.close();

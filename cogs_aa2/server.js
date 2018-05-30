	/* import express library */
	const express = require('express');
	const app = express();

	/* import sqlite3 */
	const sqlite3 = require('sqlite3');
	const db = new sqlite3.Database('regions_detail.db');
	const userdb = new sqlite3.Database('pets.db');
	const db1 = new sqlite3.Database('conditions.db');
	const db2 = new sqlite3.Database('tracking.db');

	/* serve the static files */
	app.use(express.static('static_files/'));
  	app.use(express.static('static_files/html/')); /* from what i think i know we don't need this */



  /* should be able to get rid of this too */
	app.get ('/options', (req, res) => {
		//const allOptions = Object.keys(fakeDatabase);
		db.all('SELECT region FROM regions_to_details', (err, rows) => {

			const allRegions = rows.map(e => e.region); //give everything from 'rows' and pull the 'region' text out from them
			res.send(allRegions);
			console.log(allRegions + ' the regions');
		});

		//res.send(allOptions);
	});

	app.get ('/conditions', (req,res) => {

		db1.all('SELECT title FROM url_to_image', (err, rows) =>{
			const allConditions = rows.map(e => e.title);
			//console.log(rows);
			res.send(allConditions);
			//console.log(allConditions + 'the conditions');

		});
	});

	app.get('/conditions/:name', (req, res) => {
		const conditionsToLookup = req.params.name;

		db1.all (
			'SELECT * FROM url_to_image WHERE url=$url',
			{
				$url: conditionsToLookup,
			},
			(err, rows) => {
				console.log(rows);
				if(rows.length > 0) {
					res.send(rows[0]);
				} else {
					res.send({});
				}
			}
		);
	});

	app.get('/options/:optionsid', (req, res) => {
		const optionToLookup = req.params.optionsid;

		db.all (
			//SQL query:
			'SELECT * FROM regions_to_details WHERE region=$region',
			//parameters to pass into SQL query:
			{
				$region: optionToLookup //first key value binding
			},
			// callback function to run when the query finishes:
			(err, rows) => {

				if (rows.length > 0) {
					res.send(rows[0]); //assuming that there's only one element
				} else {
					res.send({}); //failed, so return an empty object instead of undefined
				}
			}
		);

	});


	/* finish conditions */

/* tracking page */
	app.get ('/tracking', (req,res) => {

		userdb.all('SELECT name FROM users_to_pets', (err, rows) => {
			const trackingData = rows.map(e => e.name);
			console.log(rows);
			res.send(trackingData);

			//console.log(trackingData + 'the conditions');
			//res.send(trackingData);
		});
	});

	app.get('/tracking/:name', (req, res) => {
		const nameToLookup = req.params.name;
		console.log(req.params.name);
		console.log(nameToLookup);

		userdb.all (
			'SELECT * FROM users_to_pets WHERE name=$name',
			{
				$name: nameToLookup
			},
			(err, rows) => {
				console.log(rows);
				if(rows.length > 0) {
					res.send(rows[0]);
				} else {
					res.send({});
				}
			}
		);

	});


app.get('/users', (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  userdb.all('SELECT name FROM users_to_pets', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames);
    res.send(allUsernames);
  });
});


// POST data about a user to insert into the database
// (note that this will insert duplicate entries!)
//
// To test, use the web frontend interface at:
//   http://localhost:3000/petsapp.html
// use this library to parse HTTP POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // hook up with your app

//MAKING POSTS
app.post('/users', (req, res) => {
  console.log(req.body);

  userdb.run(
	'INSERT INTO users_to_pets VALUES ($name, $password)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $password: req.body.password,

    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
});




app.post('/users/Amparo', (req, res) => {

   let sectionBrain = req.body.prevPage;
   let timeBrain = req.body.totalTime; 
   console.log('this is sectionBrain '+ sectionBrain);
   console.log('thie is timeBrain '+ timeBrain);
	
  
  	if (sectionBrain == 'hindbrain') {
  	//let timeToAdd = userdb.run("SELECT sectionBrain FROM users_to_pets WHERE name = 'Amparo'");
  	//console.log('ddddddddddd   ' + timeToAdd);
	userdb.run( "UPDATE users_to_pets SET hindbrain = $guo WHERE name = 'Amparo'",
		    // parameters to SQL query:
		    {
		      //$whatever: sectionBrain,
		      $guo: timeBrain

		    },
	
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  ); 
} else if(sectionBrain == 'midbrain') {
	userdb.run( "UPDATE users_to_pets SET midbrain = $guo WHERE name = 'Amparo'",
		    // parameters to SQL query:
		    {
		      
		      //$whatever: sectionBrain,
		      $guo: timeBrain 

		    },
	
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
} else if(sectionBrain == 'forebrain'){
	userdb.run( "UPDATE users_to_pets SET forebrain = $guo WHERE name = 'Amparo'",
		    // parameters to SQL query:
		    {
		      
		      //$whatever: sectionBrain,
		      $guo: timeBrain

		    },
	
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
} else if(sectionBrain == 'cerebral'){
	userdb.run( "UPDATE users_to_pets SET cerebral = $guo WHERE name = 'Amparo'",
		    // parameters to SQL query:
		    {
		      
		      //$whatever: sectionBrain,
		      $guo: timeBrain

		    },
	
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
} else {

}

});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  userdb.all(
    'SELECT * FROM users_to_pets WHERE name=$name',
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});

//userdb.run("UPDATE users_to_pets SET password = 'newPassword' WHERE name = 'Ryan'");


app.listen(3000, () => {
		console.log('Server started on http://localhost:3000/');
});

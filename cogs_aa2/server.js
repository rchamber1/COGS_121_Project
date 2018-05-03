	const express = require('express');
	const app = express();

	app.use(express.static('static_files/'));
    app.use(express.static('static_files/html/'));

    const sqlite3 = require('sqlite3');
	const db = new sqlite3.Database('regions_detail.db');

	app.get ('/options', (req, res) => {
		//const allOptions = Object.keys(fakeDatabase);
		db.all('SELECT region FROM regions_to_details', (err, rows) => {

			const allRegions = rows.map(e => e.region); //give everything from 'rows' and pull the 'region' text out from them
			res.send(allRegions);
			console.log(allRegions + 'the regions');
		});

		//res.send(allOptions);
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

	app.listen(3000, () => {
		console.log('Server started on http://localhost:3000/');
	});

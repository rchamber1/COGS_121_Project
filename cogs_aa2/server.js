	/* import express library */
	const express = require('express');
	const app = express();

	/* import sqlite3 */
	const sqlite3 = require('sqlite3');
	const db = new sqlite3.Database('regions_detail.db');
	const db1 = new sqlite3.Database('conditions.db');

	/* serve the static files */
	app.use(express.static('static_files/'));
  	app.use(express.static('static_files/html/')); /* from what i think i know we don't need this */

	/* fake database for conditions */
	/*
		const conditionsFake = {
					'Alzheimers': {
						title: "Alzheimer\'s Disease",
						subtitle: "sfwefvwer",
						description: "A progressive disease that destroys memory and other important mental functions.",
						symptoms: "dcev",
						treatment: "sdvedvqe",
						comparisonImg: 'img/Parkinsons_Icon.png'
				},

					'Parkinsons': {
						title: "Parkinson\'s Disease",
						subtitle: "",
						description: "A disorder of the central nervous system that affects movement, often including tremors.",
						symptoms: "",
						treatment: "",
						comparisonImg: ""
				},

					'Seizure': {
						title: "Seizure",
						subtitle: "",
						description: "A seizure is a sudden surge of electrical activity in the brain.",
						symptoms: "",
						treatment: "",
						comparisonImg: ""
				},

					'Stroke': {
						title: "Stroke",
						subtitle: "",
						description: "Damage to the brain from interruption of its blood supply.",
						symptoms: "",
						treatment: "",
						comparisonImg: ""
				},

					'ALS': {
						title: "Lou Gehrig\'s Disease",
						subtitle: "(Amyotrophic Lateral Sclerosis - A.L.S.)",
						description: "A nervous system disease that weakens muscles and impacts physical function.",
						symptoms: "",
						treatment: "",
						comparisonImg: ""
				},

					'MS': {
						title: "Multiple Sclerosis",
						subtitle: "(M.S.)",
						description: "A disease in which the immune system eats away at the protective covering of nerves.",
						symptoms: "",
						treatment: "",
						comparisonImg: ""
				},
		} */


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
			'SELECT * FROM url_to_image WHERE title=$title',
			{
				$title: conditionsToLookup, 
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

	/* get conditions */
	/*
		app.get ('/conditions/:name', (req, res) => {
			const conditionToLookup = req.params.name;
			console.log ('conditionToLookup: ', conditionToLookup);

			const val = conditionsFake[conditionToLookup];
			console.log ('val: ', val);

			if (val){
				res.send(val);
				//return res.redirect('/conditions_detail')
			}
			else {
				res.send({});
			}
		}); */
	/* finish conditions */

	app.listen(3000, () => {
		console.log('Server started on http://localhost:3000/');
	});

	const express = require('express');
	const app = express();

	app.use(express.static('static_files/'));
    app.use(express.static('static_files/html/'));

	const fakeDatabase = {
		'alzheimer': {inst: "Alzheimer's is in conditions"},
		'parkinson': {inst: "Parkinson's is in conditions"},
		'seizure': {inst: "Seizure is in conditions"},
		'stroke': {inst: "Stroke is in conditions"},
		'als': {inst: "A.L.S. is in conditions"},
		'ms': {inst: "M.S. is in conditions"},
		'cerebral cortex': {inst: "Cerebral cortex is in regions"},
		'hindbrain': {inst: "Hindbrain is in regions"},
		'midbrain': {inst: "midbrain is in regions"},
		'forebrain': {inst: "forebrain is in regions"}
	}

	app.get ('/options', (req, res) => {
		const allOptions = Object.keys(fakeDatabase);
		console.log('allOptions is: ', allOptions);
		res.send(allOptions);
	});

	app.get('/options/:optionsid', (req, res) => {
		const optionToLookup = req.params.optionsid;
		const val = fakeDatabase[optionToLookup];
		console.log (optionToLookup, '->', val);
		if (val) {
			res.send(val);
		}
		else {
			res.send({});
		}
	});

	app.listen(3000, () => {
		console.log('Server started on http://localhost:3000/');
	});

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
		'cerebral cortex': {
			inst: '“Cortex” = “Bark”, Outermost structure, covering most of brain, Evolutionarily recent, esp expanded in humans. Bulges: Gyri (singular: Gyrus), Folds: Sulci (singular: Sulcus) or Fissures (if very deep). Central Sulcus divides Parietal from Frontal Lobe, Lateral Sulcus divides Temporal from Frontal Lobe',
			detail: {
				occipital_lobe: "(ventral posterior): Visual Processing Includes primary projection area (V1 or Striate) from LGN of Thalamus & some higher visual areas. Divided into separate pathways for Color, Detail, Motion, Depth, etc that move into other lobes",
				frontal_lobe: "(lateral): Higher Visual, Audition, Emotion & Language Comprehension",
				'Temporal Lobe': "(anterior) Motor Cortex, Language Production, and Strategy",
				'Parietal Lobe': "(dorsal posterior): Higher Visual, Somatosensory Processing and Spatial Mapping"
			}
		},

		'hindbrain': {
			inst: "Ancient, posterior part of brain consisting of Medulla, Pons and Cerebellum",
			detail: {
				pons: "(Latin for “Bridge) Relays info between Cortex & Cerebellum and between Brain & Spinal Cord. Pons (& Medulla) also include Cranial Nerves V through XII that carry sensory/motor info to/from the head. Plus they include Reticular Formation (involved in Arousal) and Raphe System (involved in Sleep)",
				cerebellum: "(Little Brain) Motor programs; Organizes online sensory input to guide movement; Modifiable by learning. Critical in timing actions, including for graceful, coordinated activity; Also important in relevant shifting of attention",
				medulla: "a (“Medulla Oblongata”) = Controls breathing, heart-rate, vomiting, coughing, and other vital reflexes. Overdose of cocaine, heroin etc. can be fatal via pathological effects on Medulla"
			}
		},
		'midbrain': {
			inst: "Central structures above Hindbrain; Proportionally larger & more important in simpler brains",
			detail: {
				tectum : "Part of sensory pathways to brain. (Latin for Roof, as in Plate Tectonics in geology). Consists of Superior Colliculus (Vision – including for Blindsight) and Inferior Colliculus (Audition)",
				tegmentum: "Major motor pathways Lies below Tectum (Latin for “Covering” or “Rug”)Includes Red Nucleus & Substantia Nigra w/Dopaminergic neurons that degenerate in Parkinson’s Disease.Contains Cranial Nerves III and IV (controlling eye movements) - Also part of Reticular Formation for arousal"
			}
		},
		'forebrain': {
			inst: "Most anterior portion of brain. Two divisions: Diencephalon (part of brain stem) and Telencephalon (the rest)",
			detail: {
				Telencephalon: {
					Hippocampus: "'Seahorse', posterior and inferior to the Thalamus/Hypothalamus. Important in forming new memories, and active in spatial mapping",
					Amygdala: "'Almond' at anterior end of Hippocampus in temporal lobe, near Lateral Ventricles. Important in emotional expression, especially anger and fear, and in interpreting emotion in others",
					'Cingulate Gyrus': "'Limbic Cortex', forms layer immediately inferior to Cerebral Cortex, +/- Evaluation. A 'Re-Entrant' system that interacts w/Cortex & with other Limbic structures to assess good/bad",
					'Olfactory Bulb': "extends on stalk out of brain toward nasal cavity"
				},
				Diencephalon: {
					Thalamus: 'paired central structures atop midbrain, Primary source of input to Cerebral Cortex',
					Hypothalamus: "(“Hypo” = “low, below”) = small structure with many nuclei, just ventral to Thalamus"
				}
			}
		}
	};



	app.get ('/options', (req, res) => {

		//const test = fakeDatabase['regions'][0]['lead'];
		//console.log(test); //these two lines print out perfectly

		const allOptions = Object.keys(fakeDatabase);
		//console.log('allOptions is: ', allOptions);
		res.send(allOptions);
	});

	app.get('/options/:optionsid', (req, res) => {
		const optionToLookup = req.params.optionsid;
		const val = fakeDatabase[optionToLookup];
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

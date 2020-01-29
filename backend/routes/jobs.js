const router = require('express').Router();
let Job = require('../models/job.model');

router.route('/').get((req, res) => {

    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res ) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newJob = new Job ({

        username,
        description,
        duration,
        date,
    });


    newJob.save()
    .then (() => res.json('Job added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/:id').get((req, res) => {

    Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/:id').delete((req, res) => {

    Job.findByIdAndDelete(req.params.id)
    .then(() => res.json('job deleted'))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/update/:id').post((req, res ) => {

    Job.findById(req.params.id)
    .then (job => {
    

        job.username = req.body.username;
        job.description = req.body.description;
        job.duration = Number(req.body.duration);
        job.date = Date.parse(req.body.date);

        job.save()
        .then (( ) => res.json('Job updated!'))
        .catch(err => res.status(400).json('Error: ' + err));


    })
    .catch(err => res.status(400).json('Error: ' + err));

});






module.exports = router;

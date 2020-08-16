const UserPlants = require('../models/UserPlants');
const trackerController = require('./tracker-controller')

const userPlantsController = {
    index(req, res, next) {
        UserPlants.getAll(req.user.id)
            .then((plants) => {
                // res.render('plants/index', {
                //     message: 'ok',
                //     data: { plants },
                // });
                res.locals.plants = { plants };
                next();
            })
            .catch(next)
    },

    show(req, res, next) {
        UserPlants.getById(req.params.id)
            .then((plant) => {
                res.locals.plant = plant;
                next();
            })
            .catch(next);
    },

    // create(req, res, next){  //why no next here? maybe because it redirects upon completion
    //     new UserPlants({
    //         apiReference = req.body.apiReference,
    //         plantName = req.body.name
    //     })
    //     .save()
    //     // .then(() => {
    //     //     res.redirect(`/something`)
    //     // }) No redirect page set up
    //     .catch(next);
    // },

    update(req, res, next){
        UserPlants.getById(req.params.id)
            .then((plant) => {
                return plant.update(req.body);
            })
            .then((updatedPlant) => {
                res.redirect(`/plants/${updatedPlant.id}`);
            })
            .catch(next);
    },

    delete(req, res, next){
        UserPlants.getById(req.params.id)
            .then((plant) => {
                return plant.delete();
            })
            .then(() =>{
                res.redirect('/plants');
            })
            .catch(next);
    },

    //tracker

    // indexTracker(req, res, next) {
    //     UserPlants.getById(req.user.id)
    //         .then((userPlant) =>{
    //             userPlant.getWeekly()
    //         })
    //         .then((week) => {
    //             // res.render('plants/index', {
    //             //     message: 'ok',
    //             //     data: { plants },
    //             // });

    //             res.locals.week = { week };
    //             next();
    //         })
    //         .catch(next)
    // },
    
}

module.exports = userPlantsController
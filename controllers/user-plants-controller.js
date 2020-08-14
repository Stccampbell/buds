const UserPlants = require('../models/UserPlants');

const userPlantsController = {
    index(req, res, next) {
        UserPlants.getAll(req.user.id)
            .then((plants) => {
                res.render('plants/index', {
                    message: 'ok',
                    data: { plants },
                });
            })
            .catch(next)
    },

    // index(req, res, next) {
    //     UserPlants.getAll()
    //         .then((plants) => {
    //             res.render('plants/index', {
    //                 message: 'ok',
    //                 data: { plants },
    //             });
    //         })
    //         .catch(next)
    // },

    show(req, res, next) {
        UserPlants.getById(req.params.id)
            .then((plant) => {
                res.locals.plant = plant;
                next();
            })
            .catch(next);
    },

    // create(req, res){  //why no next here? maybe because it redirects upon completion
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

    update(req, res,){
        UserPlants.getById(req.params.id)
            .then((plant) => {
                return plant.update(req.body);
            })
            // .then((updatedPlant) => {
            //     res.redirect(`/something/${updatedPlant.id}`);
            // }) No redirect page set up
            .catch(next);
    },

    delete(req, res,){
        UserPlants.getById(req.params.id)
            .then((plant) => {
                return plant.delete();
            })
            .then(() =>{
                res.redirect('/something');
            })
            .catch(next);
    },
}

module.exports = userPlantsController
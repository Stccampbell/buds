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

    create(req, res, next){ 
        new UserPlants({
            plantName: req.body.name,
            userId: req.user.id,
        })
        .save(req.body.name, req.user.id,)
        .then(() => {
            res.redirect(`/plants`)
        })
        .catch(next);
    },

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
}

module.exports = userPlantsController
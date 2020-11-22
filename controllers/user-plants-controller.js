const UserPlants = require('../models/UserPlants');

const userPlantsController = {
    //pulls all plants for that user
    index(req, res, next) {
        UserPlants.getAll(req.user.id)
            .then((plants) => {
                res.json({
                    message: 'ok',
                    data: { plants },
                })
            })
            .catch(next)
    },

    //pulls a plant for that user
    show(req, res, next) {
        UserPlants.getById(req.params.id)
            .then((plant) => {
                res.json({
                    message: 'ok',
                    data: { plant },
                })
            })
            .catch(next);
    },

    //adds a plant to the data base
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

    //updates a plant in the data base
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

    //deletes a plant in the database
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

//all are going to user-plants-router
module.exports = userPlantsController
const express = require('express');
const userPlantsRouter = express.Router();

const userPlantsController = require('../controllers/user-plants-controller');
const trackerController = require('../controllers/tracker-controller');



userPlantsRouter.get('/', userPlantsController.index, (req, res) => {
    res.render('plants', {
        plants: res.locals.plants
    });
});

userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, trackerController.lastWatered, (req,res) =>{
    console.log(res.locals)
    res.render('plants/show', {
        plant: res.locals.plant,
        lastWatered: res.locals.lastWatered
    });
});

userPlantsRouter.post('/:id([0-9]+)', trackerController.create);



userPlantsRouter.post('/', userPlantsController.create);

userPlantsRouter.put('/:id', userPlantsController.update);

userPlantsRouter.delete('/:id', userPlantsController.delete);

module.exports = userPlantsRouter;
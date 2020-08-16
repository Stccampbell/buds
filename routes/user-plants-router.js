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

// userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, trackerController.week, (req,res) =>{
//     console.log(res.locals)
//     res.render('plants/show', {
//         plant: res.locals.plant,
//         pastWeek: res.locals.pastWeek
//     });
// });

// userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, trackerController.week, (req,res) =>{
//     res.send({
//         plant: res.locals.plant,
//         week: res.locals.week
//     });
// });

// userPlantsRouter.post('/', userPlantsController.create);

// userPlantsRouter.get('/:id([0-9]+)/edit', userPlantsController.show, (req, res) => {
//     res.render('plants/edit', {
//         plant: res.locals.plant
//     });
// });

// userPlantsRouter.put('/:id', userPlantsController.update);

// userPlantsRouter.get('/', userPlantsController.index, userPlantsController.indexTracker, (req, res) => {
//     res.render('plants', {
//         plants: res.locals.plants,
//         week: res.locals.week
//     });
// });

userPlantsRouter.delete('/:id', userPlantsController.delete);

module.exports = userPlantsRouter;
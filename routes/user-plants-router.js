const express = require('express');
const userPlantsRouter = express.Router();

const userPlantsController = require('../controllers/user-plants-controller');
const trackerController = require('../controllers/tracker-controller');

//shows all plants for auser
userPlantsRouter.get('/', userPlantsController.index);


//shows individual plant for user and their waterings
userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, trackerController.lastWatered);

//adds new watering log
userPlantsRouter.post('/:id([0-9]+)', trackerController.create);


//adds new plant
userPlantsRouter.post('/', userPlantsController.create);

//updates plant name
userPlantsRouter.put('/:id', userPlantsController.update);

//deletes plant
userPlantsRouter.delete('/:id', userPlantsController.delete);


// //shows all plants for auser
// userPlantsRouter.get('/', userPlantsController.index, (req, res) => {
//     res.render('plants', {
//         plants: res.locals.plants
//     });
// });


// //shows individual plant for user and their waterings
// userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, trackerController.lastWatered, (req,res) =>{
//     console.log(res.locals)
//     res.render('plants/show', {
//         plant: res.locals.plant,
//         lastWatered: res.locals.lastWatered
//     });
// });

// //adds new watering log
// userPlantsRouter.post('/:id([0-9]+)', trackerController.create);


// //adds new plant
// userPlantsRouter.post('/', userPlantsController.create);

// //updates plant name
// userPlantsRouter.put('/:id', userPlantsController.update);

// //deletes plant
// userPlantsRouter.delete('/:id', userPlantsController.delete);

module.exports = userPlantsRouter;
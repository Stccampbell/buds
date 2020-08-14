const express = require('express');
const userPlantsRouter = express.Router();

const userPlantsController = require('../controllers/user-plants-controller');
// const usersController = require('../controllers/user-controllers.js');

userPlantsRouter.get('/', userPlantsController.index);
// userPlantsRouter.post('/', userPlantsController.create);

// userPlantsRouter.get('/add', (req, res) => {
//     res.render('')
// }) might cut this

// userPlantsRouter.get('/:id([0-9]+)', userPlantsController.show, (req,res) =>{
//     res.render('plants/show', {
//         plant: res.locals.plant
//     });
// });

// userPlantsRouter.get('/:id([0-9]+)/edit', userPlantsController.show, (req, res) => {
//     res.render('plants/edit', {
//         plant: res.locals.plant
//     });
// });

// userPlantsRouter.put('/:id', userPlantsController.update);

// userPlantsRouter.delete('/:id', userPlantsController.delete);

module.exports = userPlantsRouter;
const Tracker = require('../models/Tracker');
const UserPlants = require('../models/UserPlants');

const trackerController = {
    week(req, res, next){
        Tracker.getByWeek(req.params.id)
            .then((week) => {
                // res.render('', {
                //     message: 'ok',
                //     data: { week },
                // });
                res.locals.pastWeek = week;
                next();
            })
            .catch(next);
    },



















    // month(req, res, next){
    //     UserPlants.getById(req.params.id)
    //         .then((plant) => {
    //             Tracker.getByMonth(plant.id);
    //         })
    //         .then((month) => {
    //             // res.render('', {
    //             //     message: 'ok',
    //             //     data: { month },
    //             // });
    //             res.locals.month = { month }
    //         })
    //         .catch(next);
    // },

//     today(req, res, next){
//         UserPlants.getById(req.params.id)
//             .then((plant) => {
//                 Tracker.getByDay(plant.id);
//             })
//             .then((day) => {
//                 // res.render('', {
//                 //     message: 'ok',
//                 //     data: { day },
//                 // });
//                 res.locals.day = { day };
//                 next();
//             })
//             .catch(next);
//     },

// //     // create(req, res, next){

// //     // },

//     delete(req, res, next){
//         UserPlants.getById(req.params.id)
//             .then((plant) => {
//                 Tracker.getByDay(plant)
//             })
//             .then((day) => {
//                 return day.delete();
//             })
//             .catch(next);
//     }
}

module.exports = trackerController;
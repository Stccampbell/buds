const Tracker = require('../models/Tracker');
const UserPlants = require('../models/UserPlants');

const trackerController = {
    week(req, res, next){
        Tracker.getByWeek(req.params.id)
            .then((week) => {
                res.locals.pastWeek = week;
                next();
            })
            .catch(next);
    },

    lastWatered(req, res, next){
        Tracker.getMostRecent(req.params.id)
            .then((last) => {
                res.locals.lastWatered = last;
                next();
            })
            .catch(next);
    },

    month(req, res, next){
        Tracker.getByMonth(req.params.id)
            .then((month) => {
                res.locals.pastMonth = month;
                next();
            })
            .catch(next);
    },

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
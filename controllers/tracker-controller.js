const Tracker = require('../models/Tracker');
const UserPlants = require('../models/UserPlants');

const trackerController = {
    //pulls a week from the database not currently called in any router
    week(req, res, next){
        Tracker.getByWeek(req.params.id)
            .then((week) => {
                res.locals.pastWeek = week;
                next();
            })
            .catch(next);
    },
    //pulls the most recent watering is called in user-plants-router.js
    lastWatered(req, res, next){
        Tracker.getMostRecent(req.params.id)
            .then((last) => {
                res.locals.lastWatered = last;
                next();
            })
            .catch(next);
    },
    //pulls a month not called anywhere
    month(req, res, next){
        Tracker.getByMonth(req.params.id)
            .then((month) => {
                res.locals.pastMonth = month;
                next();
            })
            .catch(next);
    },

    //adds a new log for the time it is logged in called same lastwatered
    create(req, res, next){
        const userPlantId = req.body.userPlantId
        new Tracker({
            userPlantId: userPlantId,
        })
        .save(req.body.userPlantId)
        .then(() => {
            res.redirect(`/plants/${req.body.userPlantId}`)
          })
        .catch(next);
    },

        //not currently in use
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
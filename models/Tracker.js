const db = require('../db/config');
const UserPlants = require('./UserPlants')

class Tracker {
    constructor(tracker){
        this.id = tracker.id || null;
        this.userPlantId = tracker.user_plant_id;
        this.dayWatered = tracker.day_watered;
    }

    static getByWeek(plantId){
        return db
            .manyOrNone(`
            SELECT * FROM tracker
            WHERE user_plant_id = $1 AND day_watered > (NOW() - INTERVAL '7 days')
            `, plantId).then((tracker) => {
                return tracker.map((week) => {
                    return new this(week);
                });
            });
    }

    static getMostRecent(plantId){
        return db
            .oneOrNone(`
            SELECT * FROM tracker 
            WHERE user_plant_id = $1 
            ORDER BY day_watered 
            DESC LIMIT 1
            `, plantId).then((tracker) => {
                if(tracker) {return new this(tracker)}
                else{return new this("null", "null", "Has not been watered yet!")}
            });
    }

    // static getMostRecent(plantId){
    //     return db
    //         .oneOrNone(`
    //         SELECT * FROM tracker 
    //         WHERE user_plant_id = $1 
    //         ORDER BY day_watered 
    //         DESC LIMIT 1
    //         `, plantId).then((tracker) => {
    //             return tracker.map((week) => {
    //                 return new this(week);
    //             });
    //         });
    // }








    static getByMonth(plantId) {
        return db
            .manyOrNone(`
            SELECT * FROM tracker
            WHERE user_plant_id = $1 AND day_watered > (NOW() - INTERVAL '31 days')
            `, plantId).then((tracker) => {
                return tracker.map((month) => {
                    return new this(month);
                });
            });
    }

    // save(){
    //     return db
    //         .one(`
    //             INSERT INTO tracker 
    //             (user_plant_id, day_watered)
    //             VALUES
    //             ($/userPlantId/, $/dayFed/)
    //         `, this).then((tracker) => {
    //             return Object.assign(this, tracker)
    //         });
    // }

    // delete(){
    //     return db.oneOrNone('DELETE FROM tracker WHERE id =$1', this.id)
    // }
}

module.exports = Tracker
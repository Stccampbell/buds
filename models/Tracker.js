const db = require('../db/config');

class Tracker {
    constructor(tracker){
        this.id = tracker.id || null;
        this.userPlantId = tracker.user_plant_id;
        this.dayFed = tracker.day_fed;
    }

    static getMonth() {
        return db
            .manyOrNone('SELECT * FROM tracker')

    }

    static getWeek(){
    }

    static getById(id){
    }

    save(){
        return db
            .one(`
                INSERT INTO tracker 
                (user_plant_id, day_fed)
                VALUES
                ($/userPlantId/, $/dayFed/)
            `)
    }

    delete(){
        return db.oneOrNone('DELETE FROM tracker WHERE id =$1', this.id)
    }
}
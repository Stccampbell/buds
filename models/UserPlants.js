const db = require('../db/config');
const Tracker = require('./Tracker')

class UserPlants {
    constructor(plant) {
        this.id = plant.id;
        this.apiReference = plant.api_reference;
        this.plantName = plant.plant_name;
        this.userId = plant.user_id;
    }

    static getAll(id) {
        return db
            .manyOrNone(`SELECT * FROM user_plants 
            WHERE user_id = $1 ORDER BY id ASC
            `, id) //review what below this is doing
            .then((plants) => {
                return plants.map((plant) => {
                    return new this(plant);
                });
            });
    }

    // static getAll() {
    //     return db
    //         .manyOrNone(`SELECT * FROM user_plants 
    //         ORDER BY id ASC
    //         `) //review what below this is doing
    //         .then((plants) => {
    //             return plants.map((plant) => {
    //                 return new this(plant);
    //             });
    //         });
    // }

    static getById(id) {
        return db
        .oneOrNone('SELECT * FROM user_plants WHERE id = $1', id)
        .then((plant) => {
            if(plant) return new this(plant);
            throw new Error('Plant not found');
        });
    }

    save() {
        return db
            .one(`
            INSERT INTO user_plants 
            (api_reference, plant_name, user_id)
            VALUES
            ($/apiReference/, $/plantName/, $/userId/)
            RETURNING *
            `, this)
            .then((plant) => {
                return Object.assign(this, plant)
            });
    }

    update(changes) {
        Object.assign(this, changes);
        return db
            .oneOrNone(`
            UPDATE user_plants SET
            api_reference = $/apiReference/,
            plant_name = $/plantName/,
            user_id = $/user_id/
            WHERE id = $/id/
            RETURNING *
            `, this)
            .then((plant) => {
                return Object.assign(this, plant);
            });
    }

    delete() {
        return db.oneOrNone('DELETE FROM user_plants WHERE id = $1', this.id)
    }
}

module.exports = UserPlants
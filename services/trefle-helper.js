const fetch = require('node-fetch');
require('dotenv').config();

const getPlantsTrefle = (req, res, next) => {
    fetch(`https://trefle.io/api/v1/plants/search?${proccess.env.TREFLE_API_KEY}&q=${req.body.treflePlants}`)
    .then((fetchRes) => fetchRes.json())
    .then((allPlants) => {
        res.locals.treflePlants = allPlants
        console.log(allPlants)
        next();
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
}

module.exports = getPlantsTrefle;
const { city } = require('../city');

//getCities
const getCities = async (req, res) => {
  let cities = [];
  try {
    cities = await city.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(cities)
}

//GetCity
const getCity = async (req, res) => {
  
}

//CreateCity
const createCity = async (req, res) => {

  console.log(req.body);


  let createdCity = null;
  try {
    createdCity = await city.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'La ciudad ya existe'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdCity);
}

//UpdateCity
const updateCity = () => {

}

//DeleteCity
const deleteCity = () => {

}

module.exports = {
  getAll: getCities,
  getOne: getCity,
  create: createCity,
  update: updateCity,
  delete: deleteCity,
}

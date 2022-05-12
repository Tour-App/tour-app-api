const { city } = require('../city');

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

const getCity = async (req, res) => {
  let selectedCity = [];
  let cityId = req.params.id;
  try {
    selectedCity =  await city.findAll({
      where: {
        id: cityId
      } 
    });
  } catch(err) {
    console.error(err);
    return res.status(400).json({error: err})
  }

  return res.status(200).json(selectedCity)
}

const createCity = async (req, res) => {
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

const updateCity = async (req, res) => {
  let cityId = req.params.id;
  let {name, description, state} = req.body;
  try {
    let cityToUpdate = await city.findByPk(cityId)
     cityToUpdate = await city.update({
      name: name,
      description: description,
      state: state
    },
      {where: {
        id: cityId
      }
    })
  } catch(err) {
    console.error(err);
    if(!cityToUpdate) {
      return res.status(402).json({message: 'La ciudad que intentas modificar no existe'})
    }
    return res.status(402).json({error: err})
  }
    return res.status(200).json(cityToUpdate)
  } 

const deleteCity = async(req, res) => {
  let cityId = req.params.id;
  let cityToDelete = null;
  try{
    cityToDelete = await city.delete({
      where: {
        id: cityId
      }
    })
  } catch(err) {
    console.error(err)
    if(!cityToDelete) {
      return res.status(402).json({message: 'La ciudad que intentas borrar no existe'})
    }
    return res.status(402).json({error: err})
  }
  return res.status(204).json({message: 'La ciudad ha sido borrada exitosamente'})
}

module.exports = {
  getAll: getCities,
  getOne: getCity,
  create: createCity,
  update: updateCity,
  delete: deleteCity,
}

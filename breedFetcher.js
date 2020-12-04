const request = require('request');


//call the call callback if there's an error, error, otherwise description
const fetchBreedDescription = (breedName, callback) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(`Request error, please contact the admin`, null);
      
    }
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      return callback(`Request error, breed doesn't exist`, null);
    }
    callback(null, data[0].description);
  });
  return breedName;
};

module.exports = { fetchBreedDescription };
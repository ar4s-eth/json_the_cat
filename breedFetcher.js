const request = require('request');
const breedName = process.argv[2]

const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`

const fetchCat = request(url, (error, response, body) => {
  ('error:', error);
  ('statusCode:', response && response.statusCode);
  ('body:', body);
  
  
  if (error) {
    console.log(`Request error, please contact the admin`);
    return;
  } 
  const data = JSON.parse(body);

  if (data.length === 0) {
    return console.log(`Breed not found, please enter a real cat breed`);
  }
  nameQuery = data[0].description
  console.log(nameQuery)
})

fetchCat
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];



const callback = (error, description) => {
  console.log(error);
  console.log(description);
};

fetchBreedDescription(breedName, callback);
const fetch = require('node-fetch');

export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .catch(err => console.log('error', err));
};

export const getDetails = (characterName) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterName}`)
    .then(res => res.json())
    .catch(err => console.log('error', err));
};
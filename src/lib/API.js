const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '27ee59722983b17fa4dff6041fc2a975';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`

function getForecast(lat, lng) {
  return fetch(`${WEATHER_API_URL}${lat},${lng}`)
    .then(response => response.json());  
}

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getAddress(lat, lng) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}

function getEmbedURL(lat, lng) {
  return `https://maps.darksky.net/@temperature,${lat},${lng},4?domain=&quot;+encodeURIComponent(window.location.href)+&quot;&amp;auth=1557691511_525fab22d7e25a581110010b386f03dc&amp;embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=temperature&amp;defaultUnits=_c`;
}

// export an object which has a function in it
export default {
  getAddress,
  getForecast,
  getCoordinates,
  getEmbedURL
}
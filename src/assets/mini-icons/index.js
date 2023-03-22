import clearDay from './clear-day.png';
import clearNight from './clear-night.png';
import cloudy from './cloudy.png';
import fog from './fog.png';
import hail from './hail.png';
import partyCloudyDay from './partly-cloudy-day.png';
import partyCloudyNight from './partly-cloudy-night.png';
import rainSnowShowersDay from './rain-snow-showers-day.png';
import rainSnowShowersNight from './rain-snow-showers-night.png';
import rainSnow from './rain-snow.png';
import rain from './rain.png';
import showersDay from './showers-day.png';
import showersNight from './showers-night.png';
import sleet from './sleet.png';
import snowShowersDay from './snow-showers-day.png';
import snowShowersNight from './snow-showers-night.png';
import snow from './snow.png';
import thunderRain from './thunder-rain.png';
import thunderShowersDay from './thunder-showers-day.png';
import thunderShowersNight from './thunder-showers-night.png';
import thunder from './thunder.png';
import wind from './wind.png';

const getMiniPng = tempDesc => {
  switch (tempDesc) {
    case 'clear-day':
      return clearDay;
    case 'clear-nigth':
      return clearNight;
    case 'cloudy':
      return cloudy;
    case 'fog':
      return fog;
    case 'hail':
      return hail;
    case 'party-cloud-day':
      return partyCloudyDay;
    case 'party-cloud-night':
      return partyCloudyNight;
    case 'rain-snow-showers-day':
      return rainSnowShowersDay;
    case 'rain-snow-showers-night':
      return rainSnowShowersNight;
    case 'rain-snow':
      return rainSnow;
    case 'rain':
      return rain;
    case 'showers-day':
      return showersDay;
    case 'showers-night':
      return showersNight;
    case 'sleet':
      return sleet;
    case 'snow-showers-day':
      return snowShowersDay;
    case 'snow-showers-night':
      return snowShowersNight;
    case 'snow':
      return snow;
    case 'thunder-rain':
      return thunderRain;
    case 'thunder-showers-day':
      return thunderShowersDay;
    case 'thunder-showers-night':
      return thunderShowersNight;
    case 'thunder':
      return thunder;
    case 'wind':
      return wind;

    default:
      return cloudy;
  }
};

export default getMiniPng;

const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const apiKey = ''

export default {

    getCityWeather(city) {
      return fetch(`${baseURL}/${city}?unitGroup=metric&key=${apiKey}`, {
        method: "GET",
      }).then(res => res.json())
    },

}
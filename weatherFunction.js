const getWeatherReport = (city, temperature, condition) => {
    return `The weather in ${city} is ${temperature}°F and ${condition}.`;
};

export default getWeatherReport;
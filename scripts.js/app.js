const cityForm = document.querySelector('form');

const updateCity = async (city) => {
  const cityDebts = await getCity(city);
  const weather = await getweather(cityDetails.Key);

  return {
    cityDebts: cityDebts,
    weather: weather,
  };
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update ui
  updateCity(city).then((data) => console.log(data));
});

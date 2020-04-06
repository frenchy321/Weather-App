const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
  const cityDebts = data.cityDebts;
  const weather = data.weather;

  console.log(data);

  //   update details template

  details.innerHTML = `
  <h5 class="my-3">${cityDebts.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;c</span>
  </div>
  `;

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {
  const cityDebts = await getCity(city);
  const weather = await getweather(cityDebts.Key);

  return {
    cityDebts,
    weather,
  };
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update ui
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

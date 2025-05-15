async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // ← Ganti dengan API Key kamu
  const city = document.getElementById('cityInput').value;
  const weatherResult = document.getElementById('weatherResult');

  if (!city) {
    weatherResult.innerHTML = `<p>❗ Masukkan nama kota terlebih dahulu.</p>`;
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      weatherResult.innerHTML = `<p>🔍 Kota tidak ditemukan.</p>`;
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherResult.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img src="${iconUrl}" alt="${weather}">
      <p><strong>${temp}°C</strong> — ${weather}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p>❌ Terjadi kesalahan saat mengambil data cuaca.</p>`;
  }
}

const apiKey = "hello"; // Your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  // 🟡 Check for empty input
  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // Debugging info

    // ✅ Successful response
    if (data.cod === 200) {
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherHTML;

    // ❌ Error like "city not found"
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>Error: ${data.message}</p>`;
    }

  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("weatherResult").innerHTML = "<p>Could not fetch data. Please try again later.</p>";
  }
}


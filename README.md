Company: CodTech IT Solutions

Name: Malyam Kuladeep Aaradhya

Intern ID: CT06DG3165

Domain: Full Stack Web Development

Duration: 6 Weeks

Mentor: Neela Santhosh Kumar

🌤️ Weather App – Project Description
📌 Project Title:
Weather Forecast Web App using JavaScript & OpenWeatherMap API

📝 Overview:
This project is a simple yet functional weather forecasting application built using HTML, CSS, and Vanilla JavaScript. It uses the OpenWeatherMap API to fetch real-time weather data for any city entered by the user. The application demonstrates API integration, dynamic data rendering, and basic error handling.

🎯 Features:
🔍 Search weather by city name

🌡️ Displays temperature in °C

☁️ Shows weather condition (e.g., "clear sky", "light rain")

🌍 Displays city and country code

🛑 Input validation (alerts for empty input)

❌ Error display for invalid city or API errors

🔄 Asynchronous API calls with fetch() and async/await

⚙️ Technologies Used:
Layer	Tools / Libraries
Frontend	HTML, CSS, JavaScript
API	OpenWeatherMap API
Hosting	Runs in browser (can be deployed using GitHub Pages, Netlify, etc.)

🧩 How It Works:
User enters the name of a city.

The JavaScript function getWeather() sends a fetch() request to the OpenWeatherMap API with the city name.

API returns a JSON response with weather info.

The app displays:

City and country

Current temperature (in Celsius)

Description of weather conditions

If the city is invalid or input is empty, a helpful error message is shown.

🖥️ Sample Output:
Input: London
Output:

makefile
Copy
Edit
London, GB
Temperature: 22°C
Weather: scattered clouds
📁 File Structure:
bash
Copy
Edit
weather-app/
├── index.html      # UI and input field
├── style.css       # Styling for the app
└── script.js       # JS logic + API call
🚀 How to Run:
Sign up at openweathermap.org and get your free API key.

Replace the placeholder apiKey = "hello" in script.js with your real API key.

Open index.html in a browser.

Enter a city name and click “Get Weather”.

✅ Conclusion:
This Weather App is a great beginner-friendly project that demonstrates working with third-party APIs, asynchronous JavaScript, and dynamic DOM manipulation. It’s lightweight, easy to expand, and serves as a solid foundation for more advanced weather or travel apps.

output:



# CodeClauseInternship_WeatherApp

Here’s the README content in a direct copy-and-paste format:

---

# Weather App

## Project Overview

This Weather App allows users to check the current weather and a 5-day forecast for any city. The app fetches real-time weather data using the OpenWeather API and displays it in an easy-to-understand format. Users can also view their search history and toggle the temperature between Celsius and Fahrenheit.

## Features

- **Real-time weather updates**: Get current weather details for any city.
- **5-day forecast**: See the weather forecast for the next five days.
- **Search history**: View your previously searched cities.
- **Temperature toggle**: Switch between Celsius and Fahrenheit.
- **Responsive design**: Works across desktop and mobile devices.
  
## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the user interface.
- **JavaScript**: For handling logic, API calls, and interactivity.
- **OpenWeather API**: For fetching real-time weather data.

## How to Use

1. **Enter a city**: Type the name of a city in the search bar.
2. **Click "Search"**: Get the current weather and 5-day forecast for that city.
3. **View Weather Data**: You can see the temperature, weather description, wind speed, humidity, and pressure.
4. **Search History**: Previously searched cities will appear in the history list. Click any city to view its weather again.
5. **Toggle Temperature**: Click the "Toggle Temperature" button to switch between Celsius and Fahrenheit.

## How to Set Up the Project

1. **Clone the repository** or download the project files.
   
   ```bash
   git clone <repository_url>
   ```

2. **Open the project** in any code editor (like VSCode).

3. **Add your OpenWeather API key**:
   - Get your free API key from [OpenWeather](https://openweathermap.org/).
   - In the `app.js` file, replace `"your_openweather_api_key_here"` with your actual API key.

   ```javascript
   const API_KEY = "your_openweather_api_key_here";
   ```

4. **Run the project**:
   - Open the `index.html` file in a web browser to view and test the app.

## Additional Features (Optional)

- **Customizable Look**: Modify the `styles.css` file to customize the design.
- **More Weather Info**: Add additional weather data from the API like UV index, sunrise/sunset times, etc.

## License

This project is for learning purposes and can be modified as needed.

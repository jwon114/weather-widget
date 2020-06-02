# Weather Widget
Widget that displays the current weather forecast based on geolocation.
Temperature can be in degrees celsius or fahrenheit.


![alt text](https://github.com/jwon114/weather-widget/raw/master/screenshots/weatherWidget_celsius.png "weather app celsius")
![alt text](https://github.com/jwon114/weather-widget/raw/master/screenshots/weatherWidget_fahrenheit.png "weather app fahrenheit")
## Prerequisites
- Node >= 10.15.3
## Installing
- Download or clone the repository
- Install project dependencies
```
npm install
```
- Start the development server
```
npm run start
```
- The npm script will open your default browser and navigate to http://localhost:3000
## Running the tests
- Snapshot tests
```
npm run test
```
## Functional Requirements
* Display the current temperature in degrees celsius.
* Display the temperature based on the geolocation (note; not the IP!) of your browser.
* Display a simple icon and label based on the weather information provided (eg. sunny, cloudy, rainy etc).
## Approach
Registered for a Open Weather Map account and tested the API calls using the key provided. Added a loading.gif while waiting for the API data to be fetched and rendered.

I split the app into 3 components, Header, WeatherApp and WeatherDetails. WeatherApp does the API fetch data on componentDidMount and is the parent component for Header and WeatherDetails. Header contains location and time information. WeatherDetails has the icon, temperature, precipitation probability, humidity and wind conditions. Open Weather Map provides the forecast icons via a code returned from the API.

I built the WeatherDetails component as a functional component with hooks because I wanted to explore hooks.
## Built With
* React v16.13.1
* React Create App
* Node-sass
* Jest
## Author
- James Wong
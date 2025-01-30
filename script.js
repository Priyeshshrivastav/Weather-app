
function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'e3395fb850f84ce1bcf25441252001';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    if (!location) {
        alert('Please enter a city name.');
        return;
    }
    // Fetch weather data from API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-output').innerHTML = `<p>City not found. Please try again.</p>`;
            } else {
                const temperature = data.current.temp_c;
                const condition = data.current.condition.text;
                const locationName = data.location.name;
                const region = data.location.region;
                const country = data.location.country;

                // Display the weather info
                document.getElementById('weather-output').innerHTML = `
                    <div class="weather-info">
                        <h2>Weather in ${locationName}, ${region}, ${country}</h2>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Condition: ${condition}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-output').innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        });
}

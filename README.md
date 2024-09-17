# weather-dashboard
Homepage dashboard project with weather and quote widgets

Inspired by [Momentum](https://momentumdash.com/) .

Features: 

- Weather of a chosen location
- Clock
- Background which changes depending on time of day
- Greeting, changing on time of day
- Inspirational quotes
- Pre-loading page

# Background changing depending on the time of the day

![image](https://github.com/user-attachments/assets/0a7220e1-32ce-4f40-ba31-582ab236c035)

![image](https://github.com/user-attachments/assets/f3c2dbc8-789e-43dd-a19c-934d825b150f)

![image](https://github.com/user-attachments/assets/b31483a7-e816-4740-915a-829b7cfeef93)

# Weather of a chosen location
The weather is called from the [Open Meteo API](https://open-meteo.com/) and uses the [Geoapify API](https://www.geoapify.com/) to determine latitude and longitude.

![image](https://github.com/user-attachments/assets/b6a5c0ba-cee3-45d6-ad21-a79df34b3fab)

![image](https://github.com/user-attachments/assets/4a661ea0-cf97-4f82-aa85-1a30534685ee)

Improvements to be made:
- Store given location in local storage
- Add a like button to a quote, which can be stored in local storage to be show in seperate page of favourite quotes
- Allow personalisation on the greeting by allowing users to add their name

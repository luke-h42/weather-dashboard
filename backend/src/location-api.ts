const apiKey = process.env.API_KEY;

//working geocode!
export const geocodeLocation = async (searchTerm: string) => { 
    if(!apiKey) {
        throw new Error("API Key not found")
    }

    const url = new URL("https://api.geoapify.com/v1/geocode/search")

    const queryParams = {
        apiKey,
        text: searchTerm,
        format: 'json',
        
    }

    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url);
        const resultsJson = await searchResponse.json();
        return resultsJson;
    } catch(error){
        console.log(error);
    }
};


//working weather call
export const getWeatherData = async (lat: number, long: number) => { 
    const url = new URL("https://api.open-meteo.com/v1/forecast")

    const queryParams = {
        latitude: lat.toString(),
        longitude: long.toString(),
        current: 'temperature_2m,weather_code',
        
    }

    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url);
        const resultsJson = await searchResponse.json();
        return resultsJson;
    } catch(error){
        console.log(error);
    }
};
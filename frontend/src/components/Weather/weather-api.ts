// baseurl is changing to use with render https://weather-dashboard-bmu7.onrender.com
// baseurl to work on localhost will be commented out for future use if needed
// backend port still allows port 5000 to be used and won't need altering

export const weatherData = async(lat: number, long: number) => {
    const baseUrl = new URL("http://localhost:5000/api/weather/search");
    baseUrl.searchParams.append("latitude", String(lat));
    baseUrl.searchParams.append("longitude", String(long));
    try {
        const weatherResult = await fetch(baseUrl);
        if (!weatherResult.ok) {
            throw new Error(`Weather fetch failed: HTTP status ${weatherResult.status}`);
        }
        return await weatherResult.json();
    } catch (error) {
        console.error(error);
        throw error;  // Rethrow so the caller can handle it
    }
}





export const geocodeLocation = async(searchTerm:string) => {
    const baseUrl = new URL("http://localhost:5000/api/location/search");
    baseUrl.searchParams.append("searchTerm", searchTerm)
   
    const response = await fetch(baseUrl);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const json = await response.json();
    const results = json.results[0];
    if(results === undefined){
        return undefined;
    } else {
        const locationLat = Math.round((results.lat + Number.EPSILON) * 100) / 100;
        const locationLong = Math.round((results.lon + Number.EPSILON) * 100) / 100;
       
        const weather = await weatherData(locationLat, locationLong);
        return weather;
    }
    
    
    


 
}
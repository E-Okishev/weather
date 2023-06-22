const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'e9b45b6f9f9bf3b46cf6f255634b0089';

export const fetchWeather = async (city) => {
  const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
  
  const data = await response.json();
  
}
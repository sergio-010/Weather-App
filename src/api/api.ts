import axios from "axios";
import { WeatherData } from "../interface/wheater";

const APIkey = "77ef0a0bbd5900715f9239c99fae59b1";

export const fetchWeatherData = async (
  location: string
): Promise<WeatherData | null> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

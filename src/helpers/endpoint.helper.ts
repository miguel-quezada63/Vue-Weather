import KEY from "../config/weather.config";

export const generateURLFromCity = (city: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${KEY}`;

export const generateURLFromZip = (zip: string) =>
  `https://api.openweathermap.org/data/2.5/weather?zip=${zip},1&units=imperial&appid=${KEY}`;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getMonthName(date: Date) {
  const monthNum = date.getMonth();
  return MONTHS[monthNum];
}

export function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const monthName = getMonthName(date);
  const dayName = getDayName(date);
  const dayNum = date.getDate();
  return `${dayName}, ${monthName} ${dayNum} ${year}`;
}

export function getFormattedTime() {
  const date = new Date();
  const hours = date.getHours();
  const formattedHours = ((hours + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${formattedHours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  } 
  ${hours < 12 ? `AM` : `PM`}`;
}

export function getDayName(date: Date) {
  const dayNum = date.getDay();
  return DAYS[dayNum];
}

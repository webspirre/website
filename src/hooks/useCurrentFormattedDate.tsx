import moment from "moment";

export function getCurrentTimeFormatteddd() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zero to minutes if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Format the date
  const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

  // Combine all parts into the desired format
  const formattedTime = `${formattedDate} ${hours}:${formattedMinutes}${ampm}`;

  return formattedTime;
}

export function getCurrentTimeFormattedMoment(): string {
  const now = moment();
  return now.format("MM/DD/YYYY hh:mmA");
  // return now.toDate()
}

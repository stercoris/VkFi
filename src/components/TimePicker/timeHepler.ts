export const msToTime = (ms: number) => {
  let seconds: number = Number((ms / 1000).toFixed(1));
  let minutes: number = Number((ms / (1000 * 60)).toFixed(1));
  let hours: number = Number((ms / (1000 * 60 * 60)).toFixed(1));
  let days: number = Number((ms / (1000 * 60 * 60 * 24)).toFixed(1));
  if (seconds < 60) return seconds + " Секунд";
  else if (minutes < 60) return minutes + " Минут";
  else if (hours < 24) return hours + " Часов";
  else return days + " Дней";
};

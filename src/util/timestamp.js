const getTimespamp = (timestamp) => {
  const seconds = Math.floor((Date.now() - timestamp * 1000) / 1000);
  const secondsInYear = 31536000;
  const secondsInMonth = 2592000;
  const secondsInDay = 86400;
  const secondsInHour = 3600;
  const secondsInMinute = 60;

  let interval = Math.floor(seconds / secondsInYear);
  if (interval > 1) {
    return `${interval} years ago`;
  }

  interval = Math.floor(seconds / secondsInMonth);
  if (interval > 1) {
    return `${interval} months ago`;
  }

  interval = Math.floor(seconds / secondsInDay);
  if (interval > 1) {
    return `${interval} days ago`;
  }

  interval = Math.floor(seconds / secondsInHour);
  if (interval > 1) {
    return `${interval} hours ago`;
  }

  interval = Math.floor(seconds / secondsInMinute);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }

  return `${Math.floor(seconds)} seconds ago`;
};

export default getTimespamp;

export function formatTimeAgo(elapsedTime) {
  if (elapsedTime < 60) {
    return `${elapsedTime}m ago`;
  } else {
    const hours = Math.floor(elapsedTime / 60);
    return `${hours}h ago`;
  }
}

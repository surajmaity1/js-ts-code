// Refactor this code

function getURL(dev = false, tasks = {}) {
  const baseUrl = "/tasks";
  const urlSearchParams = new URLSearchParams();

  if (dev) {
    urlSearchParams.set("status", "ACTIVE");
    urlSearchParams.set("dev", "true");
    urlSearchParams.set("size", "20");
  }

  if (tasks.hasNext) {
    urlSearchParams.set("hasNext", "true");
  }

  if (tasks.hasPrev) {
    urlSearchParams.set("hasPrev", "true");
  }

  if (urlSearchParams.size > 0) {
    return { url: baseUrl + "?" + urlSearchParams.toString() };
  }

  return { url: baseUrl };
}

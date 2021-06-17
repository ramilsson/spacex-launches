export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat().format(date);
}

export function getOffset(page, limit) {
  const offset = page * limit - limit;
  return offset >= 0 ? offset : 0;
}

export function getPagesCount(totalItemsCount, itemsPerPage) {
  return Math.ceil(totalItemsCount / itemsPerPage);
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

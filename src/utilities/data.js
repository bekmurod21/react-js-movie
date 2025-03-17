const filterHandler = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((item) => item.islike);
    case "mostviewers":
      return arr.filter((item) => item.viewers > 500);
    default:
      return arr;
  }
};
const searchHandler = (arr, search) => {
  if (search.length === 0) {
    return arr;
  }
  return arr.filter((item) => item.name.toLowerCase().includes(search));
};

export { filterHandler, searchHandler };

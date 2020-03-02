export const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCities = (array) => {
  const cities = array.map((item) => item.city).reduce((unique, o) => {
    if (!unique.some((obj) => obj.name === o.name)) {
      unique.push(o);
    }
    return unique;
  }, []);
  return cities;
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city.name === city);
};

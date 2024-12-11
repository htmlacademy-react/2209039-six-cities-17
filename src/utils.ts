import Offer from './types/types';

const countStarsNumber = (rating: number): string => `${rating * 20}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const favoriteCards = cities.filter((city) => city.isFavorite);
  const result = Object.groupBy(favoriteCards, ({ city }) => city.name);


  return result;
};

export {countStarsNumber, groupCardsByCities};

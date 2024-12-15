import Offer from './types/types';

const countStarsNumber = (rating: number): string => `${rating * 20}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const favoriteCards: Offer[] = cities.filter((city) => city.isFavorite);
  const result = Object.groupBy(favoriteCards, ({ city }): string => city.name);

  return result;
};

export {countStarsNumber, groupCardsByCities};

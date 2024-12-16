import Offer from './types/types';

const countStarsNumber = (rating: number): string => `${rating * 20}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const favoriteCards: Offer[] = cities.filter((city) => city.isFavorite);
  console.log(favoriteCards)
  const result = Object.groupBy(favoriteCards, (card: Offer): string => card.city.name);

  return result;
};

export {countStarsNumber, groupCardsByCities};

import Offer, {CityNames} from './types/types';
import * as dayjs from 'dayjs';

const countStarsNumber = (rating: number): string => `${Math.round(rating * 20)}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const result = Object.groupBy(cities, (card: Offer) => card.city.name);

  return result;
};

const findCityCards = (cities: Offer[], currentCity: CityNames):Offer[] => cities.filter((card) => card.city.name === currentCity);

const convertDateToMonthYearType = (date: string):string => dayjs(date).format('MMMM YYYY');
const findOffersQuantity = (currentCity:CityNames, offers:Offer[]) => offers.filter((offer) => offer.city.name === currentCity).length;

const sortCards = (offers: Offer[], sortingType:string):Offer[] => {
  switch (sortingType) {
    case sortingType = 'Price: low to high':
      offers = [...offers].sort((cardA, cardB) => cardA.price - cardB.price);
      break;
    case sortingType = 'Price: high to low':
      offers = [...offers].sort((cardA, cardB) => cardB.price - cardA.price);
      break;
    case sortingType = 'Top rated first':
      offers = [...offers].sort((cardA, cardB) => cardB.rating - cardA.rating);
      break;
    case sortingType = 'Popular':
      return [...offers];
  }

  return offers;
};

const removeMapScroll = (page: string): boolean => {
  if (page === 'offer') {
    return false;
  }

  return true;
};

export {countStarsNumber, groupCardsByCities, convertDateToMonthYearType, findFavoriteCards, findCityCards, findOffersQuantity, sortCards, removeMapScroll};

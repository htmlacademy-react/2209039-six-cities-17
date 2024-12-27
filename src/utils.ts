import Offer, {CityNames} from './types/types';
import * as dayjs from 'dayjs';

const countStarsNumber = (rating: number): string => `${rating * 20}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const result = Object.groupBy(cities, (card: Offer): string => card.city.name);

  return result;
};

const findCityCards = (cities: Offer[], currentCity: CityNames):Offer[] => cities.filter(card => card.city.name === currentCity);

const findFavoriteCards = (cities: Offer[]) => cities.filter((city) => city.isFavorite);

const convertDateToMonthYearType = (date: string):string => dayjs(date).format('MMMM YYYY');
const counntMapStyle = (className:string):string => className === 'cities' ? '100%' : '579px';
const findOffersQuantity = (currentCity:CityNames, offers:Offer[]) => offers.filter((offer) => offer.city.name === currentCity).length

export {countStarsNumber, groupCardsByCities, convertDateToMonthYearType, counntMapStyle, findFavoriteCards, findCityCards, findOffersQuantity};

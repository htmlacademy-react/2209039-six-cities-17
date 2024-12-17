import Offer from './types/types';
import * as dayjs from 'dayjs';

const countStarsNumber = (rating: number): string => `${rating * 20}%`;
const groupCardsByCities = (cities: Offer[]) => {
  const favoriteCards: Offer[] = cities.filter((city) => city.isFavorite);
  const result = Object.groupBy(favoriteCards, (card: Offer): string => card.city.name);

  return result;
};

const convertDateToMonthYearType = (date: string):string => dayjs(date).format('MMMM YYYY');
const counntMapStyle = (className:string):string => className === 'cities' ? '100%' : '579px';

export {countStarsNumber, groupCardsByCities, convertDateToMonthYearType, counntMapStyle};

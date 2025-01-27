import { CityNames } from '../types/types';

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export const idGetter = (id: string) => id;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';

export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';

export const CITY_LIST: CityNames[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = {
  name: CITY_LIST[0],
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 12,
  }
};

export const SortItem = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRatedList: 'Top rated first',
} as const;

export enum APIRoute {
  Cards = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum NameSpace {
  User = 'USER',
  Offer = 'OFFER'
}

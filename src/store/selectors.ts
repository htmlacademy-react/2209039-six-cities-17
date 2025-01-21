import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortCards } from '../utils';
import Offer from '../types/types';
import { NameSpace } from '../components/const';

export const getCurrentFilter = (state: State) => state[NameSpace.Offer].currentSort;
export const getOffers = (state: State) => state[NameSpace.Offer].offersList;
export const getLoadingStatus = ((state: State) => state[NameSpace.Offer].cardsLoading);
export const findCityCards = (state: State):Offer[] => getOffers(state).filter((card) => card.city.name === state[NameSpace.Offer].city.name);
export const getOffer = ((state: State) => state[NameSpace.Offer].offerInfo);
export const getNearbyCards = ((state: State) => state[NameSpace.Offer].nearbyOffers);
export const getReviews = ((state: State) => state[NameSpace.Offer].comments);
export const getOfferId = ((state: State) => state[NameSpace.Offer].offerInfo?.id);
export const getCurrentCity = ((state: State) => state[NameSpace.Offer].city.name);
export const getSortingType = ((state: State) => state[NameSpace.Offer].currentSort);


export const isAuth = ((state: State) => state[NameSpace.User].authorizationStatus === 'AUTH');
export const getUserInfo = ((state: State) => state[NameSpace.User].userInfo);
export const getAuthorizationStatus = ((state: State) => state[NameSpace.User].authorizationStatus);

export const getSortedCards = createSelector(
  [findCityCards, getCurrentFilter],
  (cards, filter) => sortCards(cards, filter)
);

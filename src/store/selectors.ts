import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortCards } from '../utils';
import Offer from '../types/types';

export const getCurrentFilter = (state: State) => state.currentSort;
export const getOffers = (state: State) => state.offersList;
export const getLoadingStatus = ((state: State) => state.cardsLoading);
export const findCityCards = (state: State):Offer[] => getOffers(state).filter((card) => card.city.name === state.city);
export const getAuthorizationStatus = ((state: State) => state.authorizationStatus);
export const getOffer = ((state: State) => state.offerInfo);
export const getUserInfo = ((state: State) => state.userInfo);

export const getSortedCards = createSelector(
  [findCityCards, getCurrentFilter],
  (cards, filter) => sortCards(cards, filter)
);

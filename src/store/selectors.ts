import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortCards } from '../utils';
import Offer from '../types/types';

export const currentFilter = (state: State) => state.currentSort;
export const offers = (state: State) => state.offersList;
export const findCityCards = (state: State):Offer[] => offers(state).filter((card) => card.city.name === state.city);

export const getSortedCards = createSelector(
  [findCityCards, currentFilter],
  (cards, filter) => sortCards(cards, filter)
);

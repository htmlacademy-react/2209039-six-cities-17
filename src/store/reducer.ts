import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, SortItem } from '../components/const';
import { offers } from '../mocks/offers';
import { changeCity, changeSorting, fillOffersList } from './action';
import { InitialState } from '../types/types';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: offers,
  currentSort: SortItem.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    }).
    addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.currentSort = initialState.currentSort;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    });
});

export {reducer};

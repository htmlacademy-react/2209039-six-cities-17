import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../components/const';
import { offers } from '../mocks/offers';
import { changeCity, fillOffersList } from './action';
import { InitialState } from '../types/types';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    }).
    addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};

import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY, SortItem } from '../components/const';
// import { offers } from '../mocks/offers';
import { changeCity, changeSorting, fillOffersList, requireAuthorization } from './action';
// import { fetchCards } from './api-actions';
import Offer, { CityNames, SotringOption } from '../types/types';
import { loadOffersAsyncThunk } from './api-actions';

type InitialState = {
  city: CityNames;
  offersList: Offer[];
  currentSort: SotringOption;
  cardsLoading: boolean;
  authorizationStatus: string;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: [],
  currentSort: SortItem.Popular,
  cardsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action)=> {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffersAsyncThunk.pending, (state) => {
      state.cardsLoading = true;
    })
    .addCase(loadOffersAsyncThunk.fulfilled, (state) => {
      state.cardsLoading = false;
    });
});

export {reducer};

import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY, SortItem } from '../components/const';
import { changeCity, changeSorting, fillOffersList, requireAuthorization } from './action';
import Offer, { City, LoggedUser, OfferForPage, Reviews, SotringOption } from '../types/types';
import { checkAuthStatus, fetchNearbyCards, fetchOfferComments, getOfferInfo, loadOffersAsyncThunk, loginAction, logoutAction } from './api-actions';

type InitialState = {
  city: City;
  offersList: Offer[];
  currentSort: SotringOption;
  cardsLoading: boolean;
  authorizationStatus: string;
  isError: boolean;
  isAuthError: boolean;
  userInfo: LoggedUser | null;
  offerInfo: OfferForPage | null;
  offerError: boolean;
  nearbyOffers: Offer[];
  comments: Reviews;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersList: [],
  currentSort: SortItem.Popular,
  cardsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isError: false,
  isAuthError: false,
  userInfo: null,
  offerInfo: null,
  offerError: false,
  nearbyOffers: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.
    addCase(fillOffersList, (state, action) => {
      state.offersList = action.payload;
    }).
    addCase(changeCity, (state, action) => {
      state.city.name = action.payload;
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
    })
    .addCase(loadOffersAsyncThunk.rejected, (state) => {
      state.cardsLoading = false;
      state.isError = true;
    })
    .addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(checkAuthStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.isAuthError = false;
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.isAuthError = true;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.userInfo = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(getOfferInfo.fulfilled, (state, action) => {
      state.offerInfo = action.payload;
      state.offerError = false;
    })
    .addCase(getOfferInfo.rejected, (state) => {
      state.offerInfo = null;
      state.offerError = true;
    })
    .addCase(fetchNearbyCards.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchOfferComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};

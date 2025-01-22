import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../components/const';
import { offerProcessSlice } from './offer-process/offer-process';
import { userPorcessSlice } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerProcessSlice.reducer,
  [NameSpace.User]: userPorcessSlice.reducer
});

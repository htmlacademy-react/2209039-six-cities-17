import { createAsyncThunk } from '@reduxjs/toolkit';
// import { store } from '.';
import Offer from '../types/types';
import { AxiosInstance } from 'axios';
import { fillOffersList } from './action';
import { APIRoute } from '../components/const';
import { AppDispatch, State } from '../types/state';

export const createAppAsyncThunk = createAsyncThunk<void, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'cards/fetchCards',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Cards);
    dispatch(fillOffersList(data));
  }
);


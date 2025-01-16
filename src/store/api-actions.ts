import { createAsyncThunk } from '@reduxjs/toolkit';
// import { store } from '.';
import Offer, { AuthData, LoggedUser, OfferForPage, PostComment, Review, Reviews } from '../types/types';
import { AxiosInstance } from 'axios';
import { fillOffersList } from './action';
import { APIRoute } from '../components/const';
import { AppDispatch, State } from '../types/state';
import { dropToken, saveToken } from '../services/token';

export const loadOffersAsyncThunk = createAsyncThunk<void, undefined, {
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

export const checkAuthStatus = createAsyncThunk<LoggedUser, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/checkAuthStatus',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<LoggedUser>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<LoggedUser, AuthData, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<LoggedUser>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const getOfferInfo = createAsyncThunk<OfferForPage, string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/getOfferInfo',
  async(id, {extra: api}) => {
    const {data} = await api.get<OfferForPage>(`${APIRoute.Cards}/${id}`);
    return data;
  }
);

export const fetchNearbyCards = createAsyncThunk<Offer[], string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchNearbyCards',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Cards}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferComments = createAsyncThunk<Reviews, string, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postCommentToOffer = createAsyncThunk<OfferForPage, Review, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferComments',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment: comment, rating: rating});
    return data;
  }
);

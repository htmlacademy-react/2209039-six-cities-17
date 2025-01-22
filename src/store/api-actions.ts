import { createAsyncThunk } from '@reduxjs/toolkit';
import Offer, { AuthData, LoggedUser, OfferForPage, OfferId, PostComment, Review, Reviews } from '../types/types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../components/const';
import { AppDispatch, State } from '../types/state';
import { dropToken, saveToken } from '../services/token';
import { getOfferId } from './selectors';

export const loadOffersAsyncThunk = createAsyncThunk<Offer[], undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/fetchCards',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Cards);
    return data;
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

export const postCommentToOffer = createAsyncThunk<Review, PostComment, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/postOfferComment',
  async ({comment, rating}, { extra: api, getState}) => {
    const id = getOfferId(getState());
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment: comment, rating: rating});
    return data;
  }
);

export const loadFavoriteOffers = createAsyncThunk<Offer[], undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/loadFavoriteOffers',
  async (_arg, {extra : api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Favorite}`);
    return data;
  }
);

export const uploadFavoriteStatus = createAsyncThunk<Offer, {offerId: OfferId; wasFavorite: boolean}, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'offer/uploadFavoriteStatus',
  async ({offerId, wasFavorite}, {extra: api}) => {
    const updatedStatus = Number(!wasFavorite);
    const {data} = await api.post<Offer>((`${APIRoute.Favorite}/${offerId}/${updatedStatus}`));
    return data;
  }
);

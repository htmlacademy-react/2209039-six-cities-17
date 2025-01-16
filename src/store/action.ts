import { createAction } from '@reduxjs/toolkit';
import Offer, { CityNames } from '../types/types';
import { AuthorizationStatus, SortItem } from '../components/const';

export const changeCity = createAction<CityNames>('cards/changeCity');
export const fillOffersList = createAction<Offer[]>('cards/fillOffersList');
export const changeSorting = createAction<SortItem>('cards/changeSorting');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

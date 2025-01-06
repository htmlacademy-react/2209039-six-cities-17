import { createAction } from '@reduxjs/toolkit';
import Offer, { CityNames } from '../types/types';
import { SortItem } from '../components/const';

export const changeCity = createAction<CityNames>('changeCity');
export const fillOffersList = createAction<Offer[]>('fillOffersList');
export const changeSorting = createAction<SortItem>('changeSorting');

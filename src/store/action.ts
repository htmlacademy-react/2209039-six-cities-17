import { createAction } from '@reduxjs/toolkit';
import Offer, { CityNames } from '../types/types';

export const changeCity = createAction<CityNames>('changeCity');
export const fillOffersList = createAction<Offer[]>('fillOffersList');

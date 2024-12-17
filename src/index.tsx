import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, city } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Setting = {
  PlacesCount: 312,
  CardsCount: 5
} as const;

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      cardsCount={Setting.CardsCount}
      offers={offers}
      city={city}
      reviews={reviews}
    />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    />
  </React.StrictMode>
);

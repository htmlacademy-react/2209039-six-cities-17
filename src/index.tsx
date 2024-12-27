import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { offers, city, offersNearby } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fillOffersList } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fillOffersList(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        city={city}
        reviews={reviews}
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);

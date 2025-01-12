import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { city, offersNearby } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { loadOffersAsyncThunk } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffersAsyncThunk());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        city={city}
        reviews={reviews}
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);

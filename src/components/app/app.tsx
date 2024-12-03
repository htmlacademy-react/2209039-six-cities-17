import { AppRoute, AuthorizationStatus } from '../const';
import Favorites from '../pages/favorites/favorites';
import MainPage from '../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import PageNotFound from '../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  placesCount: number;
  cardsCount: number;
}

function App ({placesCount, cardsCount}: AppScreenProps) : JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage placesCount={placesCount} cardsCount={cardsCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
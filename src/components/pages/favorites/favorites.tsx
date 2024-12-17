import { Helmet } from 'react-helmet-async';
import Header from '../../header/header';
// import FavoritesEmpty from './favorites-empty';
import FavoritesGroup from './favorites-group';
import Offer from '../../../types/types';
import { groupCardsByCities } from '../../../utils';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesProps = {
  offers: Offer[];
}

function Favorites({ offers }: FavoritesProps): JSX.Element {
  const cardsGroups = groupCardsByCities(offers);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className="page__favorites-container container">

          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(cardsGroups).map((cityKey) => {
                const cityGroup: Offer[] = cardsGroups[cityKey] || [];
                return (
                  <FavoritesGroup
                    key={cityKey}
                    offers={cityGroup}
                    city={cityKey}
                  />
                );
              })}
            </ul>
          </section>

        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;

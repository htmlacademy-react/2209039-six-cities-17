import { Helmet } from 'react-helmet-async';
import Header from '../../header/header';
// import FavoritesEmpty from './favorites-empty';
import FavoritesGroup from './favorites-group';
import Offer from '../../../types/types';
import { groupCardsByCities } from '../../../utils';

type FavoritesProps = {
  offers: Offer[];
}

function Favorites({offers} : FavoritesProps): JSX.Element {
  const cardsGroups = groupCardsByCities(offers)
  console.log('fav', cardsGroups)
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
              const cityGroup:Offer[] = cardsGroups[cityKey];
              console.log('cityGruop',cityGroup)
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;

import Offer from '../../../types/types';
import { groupCardsByCities } from '../../../utils';
import FavoritesGroup from './favorites-group';

type FavoritesCardsProps = {
  offers: Offer[];
}

function FavoritesCards({offers}: FavoritesCardsProps): JSX.Element {
  const cardsGroups = groupCardsByCities(offers);
  return (
    <section className='favorites'>
      <h1 className='favorites__title'>Saved listing</h1>
      <ul className='favorites__list'>
        {cardsGroups.map((city) => {
          const filteredOffers = offers.filter((offer) => city === offer.city.name);
          return (
            <FavoritesGroup
              key={city}
              offers={filteredOffers}
              city={city}
            />);
        })}
      </ul>
    </section>
  );
}

export default FavoritesCards;

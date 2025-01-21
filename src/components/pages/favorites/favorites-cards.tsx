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
  );
}

export default FavoritesCards;

import Sorting from '../../sorting/sorting';
import PlaceCardList from '../../place-card/place-card-list';
import Map from '../../map/map';
import { useMemo, useState } from 'react';
import { findOffersQuantity, groupCardsByCities } from '../../../utils';
import Offer from '../../../types/types';
import { getCurrentCity, getOffers, getSortedCards } from '../../../store/selectors';
import { useAppSelector } from '../../hooks/use-app-dispatch';

function MainConatainer(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const offerCards = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const cardsByCity = useMemo(() => offerCards.filter((card) => card.city.name === currentCity), [offerCards, currentCity]) ;
  const sortedCards = useAppSelector(getSortedCards);

  groupCardsByCities(offerCards);

  const handleActiveCardChange = (itemId: string | null) => {
    const currentCard = cardsByCity.find((card) => card.id === itemId);
    return setActiveCard(currentCard);
  };

  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{findOffersQuantity(currentCity, offerCards)} places to stay in {currentCity}</b>
        <Sorting />
        <PlaceCardList onHandleActiveCardChange={handleActiveCardChange} cards={sortedCards}/>
      </section>
      <div className='cities__right-section'>
        <Map offers={cardsByCity} activeCard={activeCard} page={'cities'} />
      </div>
    </div>
  );
}

export default MainConatainer;

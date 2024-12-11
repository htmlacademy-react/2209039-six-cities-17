import PlaceCard from './place-card';
import Offer from '../../types/types';

type PlaceCardListProps = {
  offers: Offer[];
  onHandleActiveCardChange: (id: string | null) => void;
}

function PlaceCardList ({offers, onHandleActiveCardChange}: PlaceCardListProps) :JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => <PlaceCard onHandleActiveCardChange={onHandleActiveCardChange} offer={offer} key={offer.id} cardType='cities'/>)}
    </div>
  );
}

export default PlaceCardList;

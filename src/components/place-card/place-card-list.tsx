import PlaceCard from './place-card';
import Offer from '../../types/types';
import { memo } from 'react';


type PlaceCardListProps = {
  onHandleActiveCardChange: (id: string | null) => void;
  cards: Offer[];
}

function PlaceCardListTempalte ({onHandleActiveCardChange, cards}: PlaceCardListProps) :JSX.Element {

  return (
    <div className='cities__places-list places__list tabs__content'>
      {cards.map((card) => <PlaceCard onHandleActiveCardChange={onHandleActiveCardChange} offer={card} key={card.id} cardType='cities'/>)}
    </div>
  );
}

const PlaceCardList = memo(PlaceCardListTempalte);

export default PlaceCardList;

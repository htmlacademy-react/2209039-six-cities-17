import PlaceCard from './place-card';
import Offer from '../../types/types';
import { useAppSelector } from '../hooks/use-app-dispatch';
import { sortCards } from '../../utils';

type PlaceCardListProps = {
  offers: Offer[];
  onHandleActiveCardChange: (id: string | null) => void;
}

function PlaceCardList ({offers, onHandleActiveCardChange}: PlaceCardListProps) :JSX.Element {
  const currentSort = useAppSelector((state) => state.currentSort);
  const sortedCards = sortCards(offers, currentSort);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {sortedCards.map((card) => <PlaceCard onHandleActiveCardChange={onHandleActiveCardChange} offer={card} key={card.id} cardType='cities'/>)}
    </div>
  );
}

export default PlaceCardList;

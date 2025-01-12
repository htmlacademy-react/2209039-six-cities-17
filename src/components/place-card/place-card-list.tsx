import PlaceCard from './place-card';
import { useAppSelector } from '../hooks/use-app-dispatch';
import { getSortedCards } from '../../store/selectors';


type PlaceCardListProps = {
  onHandleActiveCardChange: (id: string | null) => void;
}

function PlaceCardList ({onHandleActiveCardChange}: PlaceCardListProps) :JSX.Element {
  const sortedCards = useAppSelector(getSortedCards);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {sortedCards.map((card) => <PlaceCard onHandleActiveCardChange={onHandleActiveCardChange} offer={card} key={card.id} cardType='cities'/>)}
    </div>
  );
}

export default PlaceCardList;

import PlaceCard from './place-card';
import Offer from '../../types/types';

type NearPlaceListProps = {
  offers: Offer[];
  onHandleActiveCardChange: (id: string | null) => void;
}

function NearPlaceList ({offers, onHandleActiveCardChange}:NearPlaceListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) => <PlaceCard onHandleActiveCardChange={onHandleActiveCardChange} offer={offer} key={offer.id} cardType='cities'/>)}
    </div>
  );
}

export default NearPlaceList;

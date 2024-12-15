import { Link } from 'react-router-dom';
import Offer from '../../../types/types';
import PlaceCard from '../../place-card/place-card';

type FavoritesGroupProps = {
  offers: Offer[];
  city: string;
}


function FavoritesGroup ({offers, city}: FavoritesGroupProps):JSX.Element {
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link className='locations__item-link' to='#'>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.map((offer) =>
          <PlaceCard key={offer.id} offer={offer} cardType={'favorites'} />)}
      </div>
    </li>
  );
}

export default FavoritesGroup;

import Offer from '../../types/types';
import { countStarsNumber } from '../../utils';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: Offer;
  onHandleActiveCardChange?: (id: string | null) => void;
  cardType: 'favorites' | 'cities';
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer, onHandleActiveCardChange, cardType } = props;
  const { isPremium, previewImage, price, title, type, rating, id } = offer;

  return (
    <article className={`${cardType}__card place-card`}
      onMouseEnter={() => onHandleActiveCardChange ? onHandleActiveCardChange(id) : null}
      onMouseLeave={() => onHandleActiveCardChange ? onHandleActiveCardChange(null) : null}
    >
      {isPremium
        ?
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
        : ''}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to='#'>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: countStarsNumber(rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to='#'>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

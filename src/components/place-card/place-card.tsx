import Offer from '../../types/types';
import { countStarsNumber } from '../../utils';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import FavoriteButton from '../favorite-button/favorite-button';

type PlaceCardProps = {
  offer: Offer;
  onHandleActiveCardChange?: (id: string | null) => void;
  cardType: 'favorites' | 'cities';
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer, onHandleActiveCardChange, cardType } = props;
  const { isPremium, previewImage, price, title, type, rating, id } = offer;

  const imageWidth = cardType === 'favorites' ? 150 : 260;
  const imageHeight = cardType === 'favorites' ? 110 : 200;

  const route = AppRoute.Offer.replace(':id', id);

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
      <div className={`${cardType}__image-wrapper place-card__image-wrapper `}>
        <Link to={route}>
          <img className='place-card__image' src={previewImage} width={imageWidth} height={imageHeight} alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <FavoriteButton className={'place-card'} offerId={id}/>
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

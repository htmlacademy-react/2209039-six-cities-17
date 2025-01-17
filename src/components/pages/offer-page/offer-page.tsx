import { Helmet } from 'react-helmet-async';
import Header from '../../header/header';
import CommentForm from '../../comment-form/comment-form';
import ReviewList from '../../reviews/review-list';
import { City} from '../../../types/types';
import Map from '../../map/map';
import NearPlaceList from '../../place-card/near-place-list';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { useEffect } from 'react';
import { fetchNearbyCards, fetchOfferComments, getOfferInfo } from '../../../store/api-actions';
import { getAuthorizationStatus, getLoadingStatus, getNearbyCards, getOffer, getReviews } from '../../../store/selectors';
import { SpinnerElement } from '../../spinner/spinner-element';
import PageNotFound from '../page-not-found/page-not-found';
import { countStarsNumber } from '../../../utils';
import { AuthorizationStatus } from '../../const';

type OfferPageProps = {
  city: City;
}

function OfferPage({city}: OfferPageProps): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOfferInfo(id))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            dispatch(fetchNearbyCards(id));
            dispatch(fetchOfferComments(id));
          }
        });
    }
  }, [id, dispatch]);

  const isLoading = useAppSelector(getLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyCards).slice(-3);
  const reviews = useAppSelector(getReviews);

  if (isLoading) {
    return <SpinnerElement />;
  }

  if (!offer || !id) {
    return < PageNotFound/>;
  }

  const {title, type, price, images, description, bedrooms, isPremium, goods, maxAdults, host, rating} = offer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => <div className="offer__image-wrapper" key={image}><img className="offer__image" src={image} alt="Photo studio" /></div>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium
              &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: countStarsNumber(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => <li className="offer__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper ${host.isPro ? ' offer__avatar-wrapper--pro' : ''}`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm offerId={id}/> : ''}
              </section>
            </div>
          </div>
          <Map city={city} offers={nearbyOffers} offerOnPage={offer} page='offer'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaceList offers={nearbyOffers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

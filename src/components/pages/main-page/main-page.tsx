import { Helmet } from 'react-helmet-async';
import Header from '../../header/header';
import PlaceCardList from '../../place-card/place-card-list';
import MainPageEmpty from './main-page-empty';
import Offer, {City} from '../../../types/types';
import { useState } from 'react';
import Map from '../../map/map';
import { LocationsList } from '../../locations/locations-list';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { findOffersQuantity } from '../../../utils';

type MainPageProps = {
  offers: Offer[];
  city: City;
}

function MainPage({ offers, city }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const offerCards = useAppSelector((state) => state.offersList);
  const currentCity = useAppSelector((state) => state.city);
  const cardsByCity = offerCards.filter((card) => card.city.name === currentCity);


  const handleActiveCardChange = (itemId: string | null) => {
    const currentCard = cardsByCity.find((card) => card.id === itemId);
    return setActiveCard(currentCard);
  };

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className={cardsByCity.length ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty'}>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <LocationsList currentCity={currentCity} />
        </div>
        <div className='cities'>
          {cardsByCity.length ?
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>{findOffersQuantity(currentCity, offers)} places to stay in {currentCity}</b>
                <form className='places__sorting' action='#' method='get'>
                  <span className='places__sorting-caption'>Sort by</span>
                  <span className='places__sorting-type' tabIndex={0}>
                    Popular
                    <svg className='places__sorting-arrow' width='7' height='4'>
                      <use xlinkHref='#icon-arrow-select'></use>
                    </svg>
                  </span>
                  <ul className='places__options places__options--custom places__options--opened'>
                    <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                    <li className='places__option' tabIndex={0}>Price: low to high</li>
                    <li className='places__option' tabIndex={0}>Price: high to low</li>
                    <li className='places__option' tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <PlaceCardList onHandleActiveCardChange={handleActiveCardChange} offers={cardsByCity} />
              </section>
              <div className='cities__right-section'>
                <Map city={city} offers={offers} activeCard={activeCard} page={'cities'}/>
              </div>
            </div>
            : <MainPageEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

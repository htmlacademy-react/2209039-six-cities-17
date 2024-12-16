import { Helmet } from 'react-helmet-async';
import Header from '../../header/header';
import PlaceCardList from '../../place-card/place-card-list';
import MainPageEmpty from './main-page-empty';
import Offer, {City} from '../../../types/types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../map/map';

type MainPageProps = {
  placesCount: number;
  cardsCount: number;
  offers: Offer[];
  city: City;
}

function MainPage({ placesCount, cardsCount, offers, city }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);


  const handleActiveCardChange = (itemId: string | null) => {
    const currentCard = offers.find((card) => card.id === itemId);
    return setActiveCard(currentCard);
  };

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className={cardsCount ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty'}>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Paris</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Cologne</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Brussels</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item tabs__item--active' to='#'>
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className='locations__item-link tabs__item' to='#'>
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          {cardsCount ?
            <div className='cities__places-container container'>
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>${placesCount} places to stay in Amsterdam</b>
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
                <PlaceCardList onHandleActiveCardChange={handleActiveCardChange} offers={offers} />
              </section>
              <div className='cities__right-section'>
                <Map city={city} offers={offers} activeCard={activeCard}/>
              </div>
            </div>
            : <MainPageEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

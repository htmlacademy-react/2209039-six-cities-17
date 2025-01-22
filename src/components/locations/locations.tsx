import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { CityNames } from '../../types/types';
import { memo, MouseEvent, useCallback } from 'react';
import { changeCity } from '../../store/offer-process/offer-process';

type LocationProps = {
  city: CityNames;
  currentCity: string;
};

function LocationTemplate({ city, currentCity }: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  }, [dispatch, city]);

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        to='#'
        onClick={handleCityClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

const Location = memo(LocationTemplate);

export {Location};

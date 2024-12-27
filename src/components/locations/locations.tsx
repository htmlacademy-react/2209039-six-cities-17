import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { changeCity } from '../../store/action';
import { CityNames } from '../../types/types';

type LocationProps = {
  city: CityNames;
  currentCity: string;
};

function Location({ city, currentCity }: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        to='#'
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(changeCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export {Location};

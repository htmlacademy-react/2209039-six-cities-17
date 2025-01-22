import { useState, useRef, useEffect, memo } from 'react';
import { SortItem } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/use-app-dispatch';
import { getSortingType } from '../../store/selectors';
import { changeSorting } from '../../store/offer-process/offer-process';

function SortingTemplate(): JSX.Element {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const sortingRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(getSortingType);

  useEffect(() => {
    const hideSortOptions = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortingRef.current && !sortingRef.current.contains(evt.target)) {
        setMenuOpenState(false);
      }
    };

    document.addEventListener('click', hideSortOptions);

    return () => {
      document.removeEventListener('click', hideSortOptions);
    };
  }, []);


  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}
        ref={sortingRef}
        onClick={() => setMenuOpenState((isOpened) => !isOpened)}
      >
        {currentSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${menuOpenState ? 'places__options--opened' : ''}`}>
        {Object.values(SortItem).map((sortItem) => (
          <li key={sortItem}
            className={`places__option ${sortItem === currentSort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => dispatch(changeSorting(sortItem))}
          >
            {sortItem}
          </li>))}
      </ul>
    </form>
  );
}

const Sorting = memo(SortingTemplate);

export default Sorting;

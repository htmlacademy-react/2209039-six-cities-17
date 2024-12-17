import { Review } from '../../types/types';
import { countStarsNumber, convertDateToMonthYearType } from '../../utils';

type ReviewComponentProps = {
  review: Review;
}


function ReviewComponent(props: ReviewComponentProps): JSX.Element {
  const { review } = props;
  const { date, user, comment, rating } = review;

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className={`reviews__avatar-wrapper user__avatar-wrapper ${user.isPro && 'offer__avatar-wrapper--pro'}`}>
          <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>
          {user.name}
        </span>
        {user.isPro && <span className='offer__user-status'>Pro</span>}
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: countStarsNumber(rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {comment}
        </p>
        <time className='reviews__time' dateTime={date}>{convertDateToMonthYearType(date)}</time>
      </div>
    </li>
  );
}

export default ReviewComponent;

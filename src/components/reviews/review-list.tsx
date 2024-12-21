import { Reviews } from '../../types/types';
import ReviewComponent from './review-component';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList (props: ReviewListProps): JSX.Element {
  const {reviews} = props;
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => <ReviewComponent review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewList;

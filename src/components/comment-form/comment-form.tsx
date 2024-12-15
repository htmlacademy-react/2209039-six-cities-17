import { ChangeEvent, useState } from 'react';
import { FormDataType } from '../../types/types';

const defaultFormState: FormDataType = {
  rating: null,
  comment: ''
};


function CommentForm () : JSX.Element {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);


  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      comment: evt.target.value
    }));

    if (formData.comment.length > 50 && formData.comment.length < 300) {
      setIsSubmitButtonDisabled(false);
    }
  };

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: Number(evt.target.value)
    }));
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData(defaultFormState);
    setIsSubmitButtonDisabled(true);
  };

  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={handleFormSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        <input className='form__rating-input visually-hidden'
          onChange={handleChangeRating}
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
        />
        <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden'
          onChange={handleChangeRating}
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
        />
        <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden'
          onChange={handleChangeRating}
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
        />
        <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden'
          onChange={handleChangeRating}
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
        />
        <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input className='form__rating-input visually-hidden'
          onChange={handleChangeRating}
          name='rating'
          value='1'
          id='1-star'
          type='radio'
        />
        <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea className='reviews__textarea form__textarea' id='review' name='review' placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={handleChangeComment}
        value={formData.comment}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button disabled={isSubmitButtonDisabled} className='reviews__submit form__submit button' type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;

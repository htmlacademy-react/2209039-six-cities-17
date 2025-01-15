import { Link, useNavigate } from 'react-router-dom';
import { LoggedUser } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../hooks/use-app-dispatch';
import { getAuthorizationStatus } from '../../store/selectors';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../const';
import { MouseEventHandler } from 'react';

type HeaderNavLoggedProps = {
  user: LoggedUser;
}

function HeaderNavLogged({user}: HeaderNavLoggedProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  const navigate = useNavigate();

  const handleLogout = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction())
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          navigate(AppRoute.Root);
        }
      });
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{user.email}</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#"
          onClick={handleLogout}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderNavLogged;

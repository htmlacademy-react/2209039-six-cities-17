import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function PageNotFound () : JSX.Element {
  return (
    <div>
      <Helmet>
        <title>6 cities: Not found</title>
      </Helmet>
      <h1>Ошибка 404. Страница не найдена</h1>
      <span>Как мы тут оказались?</span>
      <br></br>
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
}

export default PageNotFound;

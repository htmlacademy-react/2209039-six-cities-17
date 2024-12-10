import Offer from "../../../types/types";
import PlaceCard from "../../place-card/place-card";

type FavoritesGroupProps = {
  offers: Offer[];
  city: string;
}


function FavoritesGroup ({offers, city}: FavoritesGroupProps):JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) =>
        < PlaceCard key={offer.id} offer={offer} />)}
      </div>
    </li>

  );
}

export default FavoritesGroup;

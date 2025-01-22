import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, NameSpace} from '../const';
import Offer, {OfferForPage} from '../../types/types';
import useMap from '../hooks/use-map';
import { useAppSelector } from '../hooks/use-app-dispatch';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [28, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [28, 40]
});

type MapProps = {
  offers: Offer[];
  activeCard?: Offer | undefined;
  page: 'offer' | 'cities';
  offerOnPage?: OfferForPage;
};

function Map(props: MapProps): JSX.Element {
  const {offers, activeCard, page, offerOnPage} = props;
  const city = useAppSelector((state) => state[NameSpace.Offer].city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, page);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng:  offer.location.longitude,
        });

        map.panTo({
          lat: offer.location.latitude,
          lng:  offer.location.longitude,
        });

        marker
          .setIcon(
            activeCard !== undefined && offer.id === activeCard.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (offerOnPage) {
        const marker = new Marker({
          lat: offerOnPage.location.latitude,
          lng: offerOnPage.location.longitude,
        });

        map.panTo({
          lat: offerOnPage.location.latitude,
          lng: offerOnPage.location.longitude,
        });

        marker
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard, offerOnPage]);

  return <section className={`${page}__map map`} ref={mapRef}></section>;
}

export default Map;

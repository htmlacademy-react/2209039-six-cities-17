import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const';
import Offer, {City} from '../../types/types';
import useMap from '../hooks/use-map';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  offers: Offer[];
  activeCard: Offer | undefined;
};

function Map(props: MapProps): JSX.Element {
  const {city, offers, activeCard} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
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

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard]);

  return <section className='cities__map map' style={{height: '512px'}} ref={mapRef}></section>;
}

export default Map;
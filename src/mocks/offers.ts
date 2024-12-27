import Offer, {City} from '../types/types';

export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2,
    'previewImage': 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f01',
    'title': 'Tiny flat',
    'type': 'apartment',
    'price': 110,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1,
    'previewImage': 'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f02',
    'title': 'Good hotel at great location',
    'type': 'apartment',
    'price': 109,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'https://viasun.ru/blog/wp-content/uploads/2023/06/sochi-park-otel.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f03',
    'title': 'Definately an awful place',
    'type': 'apartment',
    'price': 125,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://mriyaresort.com/upload/iblock/626/imzvegenaf3cpjl8yk0y9yoeulj3q1bg.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f04',
    'title': 'Good hotel at great location',
    'type': 'apartment',
    'price': 109,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 5.3909553943508,
      'longitude': 41.929309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1'
  }
];

export const city: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const offersNearby: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2,
    'previewImage': 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f01',
    'title': 'Tiny flat',
    'type': 'apartment',
    'price': 110,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1,
    'previewImage': 'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f02',
    'title': 'Good hotel at great location',
    'type': 'apartment',
    'price': 109,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'https://viasun.ru/blog/wp-content/uploads/2023/06/sochi-park-otel.jpg'
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f04',
    'title': 'Good hotel at great location',
    'type': 'apartment',
    'price': 109,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 5.3909553943508,
      'longitude': 41.929309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1'
  }
];

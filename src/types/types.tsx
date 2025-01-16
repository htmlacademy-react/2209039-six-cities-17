export type CityNames = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type OfferId = string;

type Offer = {
  id: OfferId;
  title: string;
  type: string;
  price: number;
  city: {
  name: CityNames;
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  };
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  };


export type FormDataType = {
  rating: number;
  comment: string;
};

export type City = {
  name: CityNames;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
export type Card = {
  id: string;
  latitude: number;
  longitude: number;
};

export type Review = {
  id: OfferId;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type SotringOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';


export type Reviews = Review[];

export default Offer;

export type Token = string;

export type ErrorType = {
  type: string;
  message: string;
}

export type LoggedUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
}

export type PostComment = {
  comment: string;
  rating: number;
}

export type OfferForPage = {
  id: OfferId;
  title: string;
  type: string;
  price: number;
  city: {
  name: string;
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  };
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };
  images: [string];
  maxAdults: number;
  }

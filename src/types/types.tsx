type Offer = {
  id: string;
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
  previewImage: string;
  };


export type FormDataType = {
  rating: number | null;
  comment: string;
};

export type City = {
  name: string;
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

export default Offer;

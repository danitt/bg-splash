export interface IImage {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: IUrls;
  links: ILinks;
  categories: any[];
  sponsored: boolean;
  sponsored_by?: any;
  sponsored_impressions_id?: any;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  user: IUser;
  exif: IExif;
  location: ILocation;
  views: number;
  downloads: number;
}

interface IUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  custom: string;
}

interface ILinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface ILinks2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface IProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface IUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: any;
  portfolio_url: string;
  bio?: any;
  location: string;
  links: ILinks2;
  profile_image: IProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

interface IExif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface IPosition {
  latitude: number;
  longitude: number;
}

interface ILocation {
  title: string;
  name: string;
  city: string;
  country: string;
  position: IPosition;
}

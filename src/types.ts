export interface ClinicReview {
  id: string;
  author: string;
  rating: number;
  dateText?: string;
  comment: string;
  highlight?: string;
}

export interface DentalService {
  id: string;
  title: string;
  description: string;
  bengaliTitle?: string;
  tagline: string;
  points: string[];
}

export interface ClinicInfo {
  name: string;
  bengaliName: string;
  category: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  hours: string;
  plusCode: string;
  mapsUrl: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

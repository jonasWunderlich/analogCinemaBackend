export interface CommonEntity {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
}

export interface Address {
  street?: string;
  postcode?: string;
  city?: string;
}

export interface EntityLinks {
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;
}

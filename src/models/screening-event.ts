import { ScreeningEventType } from "./sceening-event-type";

export type ScreeningEventCreate = {
  title: string;
  start: string;
  end?: string;
  text?: string;
  type?: ScreeningEventType;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
};

export type ScreeningEvent = {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;

  title: string;
  start: string;
  end?: string;
  text?: string;
  type?: ScreeningEventType;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;

  cinemaRefs: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
  auditoriumRefs?: string[];
};

import { ScreeningEventType } from "./sceening-event-type";

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate cinema keys.";

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
  images?: string[];
  cinemaRefs: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
  auditoriumRefs?: string[];
};

// **** Functions **** //

/**
 * Create new ScreeningEvent.
 */
function new_(
  createdAt?: string,
  lastModifiedAt?: string,
  title?: string,
  start?: string,
  end?: string,
  text?: string,
  type?: ScreeningEventType,
  street?: string,
  postcode?: string,
  city?: string,
  mail?: string,
  phone?: string,
  linkHomepage?: string,
  linkProgram?: string,
  images?: string[],
  cinemaRefs?: string[],
  projectionRefs?: string[],
  reportRefs?: string[],
  auditoriumRefs?: string[],
  // id?: number, // id last cause usually set by db
  id?: string // id last cause usually set by db
): ScreeningEvent {
  return {
    // id: id ?? -1,
    id: id ?? "",
    createdAt: createdAt ?? "",
    lastModifiedAt: lastModifiedAt ?? "",
    title: title ?? "",
    start: start ?? "",
    end: end ?? "",
    type: type ?? ScreeningEventType.SINGLE,
    text: text ?? "",
    street: street ?? "",
    postcode: postcode ?? "",
    city: city ?? "",
    mail: mail ?? "",
    phone: phone ?? "",
    linkHomepage: linkHomepage ?? "",
    linkProgram: linkProgram ?? "",
    images: images ?? [],
    auditoriumRefs: auditoriumRefs ?? [],
    projectionRefs: projectionRefs ?? [],
    reportRefs: reportRefs ?? [],
    cinemaRefs: cinemaRefs ?? [],
  };
}

/**
 * Get screeningEvent instance from object.
 */
function from(param: object): ScreeningEvent {
  // Check is screeningEvent
  if (!isScreeningEvent(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get screeningEvent instance
  const p = param as ScreeningEvent;
  return new_(
    p.createdAt,
    p.lastModifiedAt,
    p.title,
    p.start,
    p.end,
    p.text,
    p.type,
    p.street,
    p.postcode,
    p.city,
    p.mail,
    p.phone,
    p.linkHomepage,
    p.linkProgram,
    p.images,
    p.cinemaRefs,
    p.projectionRefs,
    p.reportRefs,
    p.auditoriumRefs
  );
}

/**
 * See if the param meets criteria to be a screeningEvent.
 */
function isScreeningEvent(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    "id" in arg &&
    "createdAt" in arg &&
    "lastModifiedAt" in arg &&
    "title" in arg &&
    "start" in arg &&
    "end" in arg &&
    "type" in arg &&
    "text" in arg &&
    "street" in arg &&
    "postcode" in arg &&
    "city" in arg &&
    "mail" in arg &&
    "phone" in arg &&
    "linkHomepage" in arg &&
    "linkProgram" in arg &&
    "images" in arg &&
    "auditoriumRefs" in arg &&
    "projectionRefs" in arg &&
    "reportRefs" in arg &&
    "cinemaRefs" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isScreeningEvent,
} as const;

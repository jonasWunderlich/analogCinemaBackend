// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate cinema keys.";

export interface Cinema {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
  title: string;
  geoCoordinates: number[];
  text?: string;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;
  images: string[];
  auditoriumRefs: string[];
  projectionRefs: string[];
  reportRefs: string[];
  eventRefs: string[];
}

// **** Functions **** //

/**
 * Create new Cinema.
 */
function new_(
  title?: string,
  geoCoordinates?: number[],
  createdAt?: string,
  lastModifiedAt?: string,
  text?: string,
  street?: string,
  postcode?: string,
  city?: string,
  mail?: string,
  phone?: string,
  linkHomepage?: string,
  linkProgram?: string,
  linkOpeningHours?: string,
  images?: string[],
  auditoriumRefs?: string[],
  projectionRefs?: string[],
  reportRefs?: string[],
  eventRefs?: string[],
  // id?: number, // id last cause usually set by db
  id?: string // id last cause usually set by db
): Cinema {
  return {
    // id: id ?? -1,
    id: id ?? "",
    title: title ?? "",
    createdAt: createdAt ?? "",
    lastModifiedAt: lastModifiedAt ?? "",
    geoCoordinates: geoCoordinates ?? [],
    text: text ?? "",
    street: street ?? "",
    postcode: postcode ?? "",
    city: city ?? "",
    mail: mail ?? "",
    phone: phone ?? "",
    linkHomepage: linkHomepage ?? "",
    linkProgram: linkProgram ?? "",
    linkOpeningHours: linkOpeningHours ?? "",
    images: images ?? [],
    auditoriumRefs: auditoriumRefs ?? [],
    projectionRefs: projectionRefs ?? [],
    reportRefs: reportRefs ?? [],
    eventRefs: eventRefs ?? [],
  };
}

/**
 * Get cinema instance from object.
 */
function from(param: object): Cinema {
  // Check is cinema
  if (!isCinema(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get cinema instance
  const p = param as Cinema;
  return new_(
    p.title,
    p.geoCoordinates,
    p.createdAt,
    p.lastModifiedAt,
    p.text,
    p.street,
    p.postcode,
    p.city,
    p.mail,
    p.phone,
    p.linkHomepage,
    p.linkProgram,
    p.linkOpeningHours,
    p.images,
    p.auditoriumRefs,
    p.projectionRefs,
    p.reportRefs,
    p.eventRefs
  );
}

/**
 * See if the param meets criteria to be a cinema.
 */
function isCinema(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    "createdAt" in arg &&
    "lastModifiedAt" in arg &&
    "title" in arg &&
    "geoCoordinates" in arg &&
    "text" in arg &&
    "street" in arg &&
    "postcode" in arg &&
    "city" in arg &&
    "mail" in arg &&
    "phone" in arg &&
    "linkHomepage" in arg &&
    "linkProgram" in arg &&
    "linkOpeningHours" in arg &&
    "images" in arg &&
    "auditoriumRefs" in arg &&
    "projectionRefs" in arg &&
    "reportRefs" in arg &&
    "eventRefs" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isCinema,
} as const;

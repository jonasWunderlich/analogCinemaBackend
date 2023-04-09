// **** Variables **** //

import { randomUUID } from "crypto";
import { Address, CommonEntity } from "./common";

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate cinema keys.";

export interface ICinemaCreate extends Address {
  title: string;
  text?: string;
  geoCoordinates: number[];
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

export interface ICinema extends CommonEntity, ICinemaCreate {}

// **** Functions **** //

/**
 * Create new Cinema.
 */
function new_(input: ICinemaCreate): ICinema {
  return {
    id: randomUUID(),
    createdAt: new Date().toJSON(),
    lastModifiedAt: new Date().toJSON(),
    title: input.title ?? "",
    geoCoordinates: input.geoCoordinates ?? [],
    text: input.text ?? "",
    street: input.street ?? "",
    postcode: input.postcode ?? "",
    city: input.city ?? "",
    mail: input.mail ?? "",
    phone: input.phone ?? "",
    linkHomepage: input.linkHomepage ?? "",
    linkProgram: input.linkProgram ?? "",
    linkOpeningHours: input.linkOpeningHours ?? "",
    images: input.images ?? [],
    auditoriumRefs: input.auditoriumRefs ?? [],
    projectionRefs: input.projectionRefs ?? [],
    reportRefs: input.reportRefs ?? [],
    eventRefs: input.eventRefs ?? [],
  };
}

/**
 * Get cinema instance from object.
 */
function from(param: ICinemaCreate): ICinema {
  // Check is cinema
  if (!isCinema(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get cinema instance
  const p = param as ICinema;
  return new_(p);
}

/**
 * See if the param meets criteria to be a cinema.
 */
function isCinema(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
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

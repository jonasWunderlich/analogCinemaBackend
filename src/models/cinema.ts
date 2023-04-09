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
    typeof arg["title"] === "string" &&
    "geoCoordinates" in arg &&
    Array.isArray(arg["title"]) &&
    "text" in arg &&
    typeof arg["text"] === "string" &&
    "street" in arg &&
    typeof arg["street"] === "string" &&
    "postcode" in arg &&
    typeof arg["postcode"] === "string" &&
    "city" in arg &&
    typeof arg["city"] === "string" &&
    "mail" in arg &&
    typeof arg["mail"] === "string" &&
    "phone" in arg &&
    typeof arg["phone"] === "string" &&
    "linkHomepage" in arg &&
    typeof arg["linkHomepage"] === "string" &&
    "linkProgram" in arg &&
    typeof arg["linkProgram"] === "string" &&
    "linkOpeningHours" in arg &&
    typeof arg["linkOpeningHours"] === "string" &&
    "images" in arg &&
    Array.isArray(arg["images"]) &&
    "auditoriumRefs" in arg &&
    Array.isArray(arg["auditoriumRefs"]) &&
    "projectionRefs" in arg &&
    Array.isArray(arg["projectionRefs"]) &&
    "reportRefs" in arg &&
    Array.isArray(arg["reportRefs"]) &&
    "eventRefs" in arg &&
    Array.isArray(arg["eventRefs"])
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isCinema,
} as const;

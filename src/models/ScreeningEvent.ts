import { randomUUID } from "crypto";
import { ScreeningEventType } from "./sceening-event-type";
import { Address, CommonEntity } from "./common";

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate cinema keys.";

export interface IScreeningEventCreate extends Address {
  title?: string;
  text?: string;

  start: string;
  end?: string;
  type?: ScreeningEventType;
  images?: string[];

  mail?: string;
  phone?: string;

  linkHomepage?: string;
  linkProgram?: string;

  cinemaRefs: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
  auditoriumRefs?: string[];
}

export interface IScreeningEvent extends CommonEntity, IScreeningEventCreate {}

// **** Functions **** //

/**
 * Create new ScreeningEvent.
 */
function new_(event: IScreeningEventCreate): IScreeningEvent {
  return {
    id: randomUUID(),
    createdAt: new Date().toJSON(),
    lastModifiedAt: new Date().toJSON(),
    title: event.title ?? "",
    start: event.start ?? "",
    end: event.end ?? "",
    type: event.type ?? ScreeningEventType.SINGLE,
    text: event.text ?? "",
    street: event.street ?? "",
    postcode: event.postcode ?? "",
    city: event.city ?? "",
    mail: event.mail ?? "",
    phone: event.phone ?? "",
    linkHomepage: event.linkHomepage ?? "",
    linkProgram: event.linkProgram ?? "",
    images: event.images ?? [],
    auditoriumRefs: event.auditoriumRefs ?? [],
    projectionRefs: event.projectionRefs ?? [],
    reportRefs: event.reportRefs ?? [],
    cinemaRefs: event.cinemaRefs ?? [],
  };
}

/**
 * Get screeningEvent instance from object.
 */
function from(param: object): IScreeningEvent {
  // Check is screeningEvent
  if (!isScreeningEvent(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get screeningEvent instance
  const p = param as IScreeningEventCreate;
  return new_(p);
}

/**
 * See if the param meets criteria to be a screeningEvent.
 */
function isScreeningEvent(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "start" in arg &&
    typeof arg["start"] === "string" &&
    "end" in arg &&
    typeof arg["end"] === "string" &&
    "type" in arg &&
    typeof arg["type"] === "string" &&
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
    typeof arg["linkProgram"] === "string"
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isScreeningEvent,
} as const;

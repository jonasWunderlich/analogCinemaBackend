import { randomUUID } from "crypto";
import { CommonEntity } from "./common";

export const AUDITORIUM_ATTRIBUTES = [
  { id: "climate", name: "Klimaanlage" },
  { id: "pair-seats", name: "Pärchensitze" },
  { id: "curved-screen", name: "gekrümmte Leinwand" },
  { id: "loge", name: "Loge" },
  { id: "leg-space", name: "Beinfreiheit" },
  { id: "piano", name: "Klavier" },
  { id: "bar", name: "Bar im Kino" },
];

export const PROJECTOR_35_SINGLE = {
  id: "1x35mm",
  name: "Nur ein 35mm Projektor",
};
export const PROJECTOR_35_DUAL = {
  id: "2x35mm",
  name: "35mm Überblendbetrieb",
};
export const PROJECTOR_DCP = {
  id: "dcp",
  name: "DCP",
};

export const PROJECTORS_OPTIONS = [
  { id: "70mm", name: "70mm Projektor :)" },
  PROJECTOR_35_SINGLE,
  PROJECTOR_35_DUAL,
  PROJECTOR_DCP,
  { id: "bluray", name: "Bluray" },
  { id: "16mm", name: "16mm" },
  { id: "8mm", name: "8mm" },
];

export const SOUND_MONO = { id: "mono", name: "Mono" };
export const SOUND_STEREO = { id: "stereo", name: "Stereo" };

export const SOUND_OPTIONS = [
  SOUND_MONO,
  SOUND_STEREO,
  { id: "5.1", name: "5.1" },
  { id: "7.1", name: "7.1" },
];

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate report keys.";

export interface IAuditoriumCreate {
  title: string;
  text?: string;

  attributes: string[];
  projectors: string[];
  screen: string;
  seats: number;
  sound: string[];
  images: string[];

  cinemaRef?: string;
  reportRefs?: string[];
}

export interface IAuditorium extends CommonEntity, IAuditoriumCreate {}

// **** Functions **** //

/**
 * Create new Auditorium.
 */
function new_(auditorium: IAuditoriumCreate): IAuditorium {
  return {
    id: randomUUID(),
    createdAt: new Date().toJSON(),
    lastModifiedAt: new Date().toJSON(),
    title: auditorium.title ?? "",
    text: auditorium.text ?? "",
    screen: auditorium.screen ?? "",
    images: auditorium.images ?? [],
    sound: auditorium.sound ?? [],
    seats: auditorium.seats ?? 0,
    attributes: auditorium.attributes ?? [],
    projectors: auditorium.projectors ?? [],
    reportRefs: auditorium.reportRefs ?? [],
    cinemaRef: auditorium.cinemaRef ?? "",
  };
}

/**
 * Get report instance from object.
 */
function from(param: object): IAuditorium {
  // Check is report
  if (!isAuditorium(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get report instance
  const p = param as IAuditoriumCreate;
  return new_(p);
}

/**
 * See if the param meets criteria to be a report.
 */
function isAuditorium(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "sound" in arg &&
    typeof arg["sound"] === "string" &&
    "screen" in arg &&
    typeof arg["screen"] === "string" &&
    "seats" in arg &&
    typeof arg["seats"] === "number" &&
    "attributes" in arg &&
    Array.isArray(arg["attributes"]) &&
    "projectors" in arg &&
    Array.isArray(arg["projectors"]) &&
    "images" in arg &&
    Array.isArray(arg["images"])
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isAuditorium,
} as const;

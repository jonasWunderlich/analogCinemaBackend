import { randomUUID } from "crypto";
import { CommonEntity } from "./common";

export interface IProjectionCreate extends CommonEntity {
  title: string;
  text?: string;

  date: string;
  images?: string[];

  tmdb?: string;
  black?: boolean;
  agent?: string;

  reportRefs?: string[];
  cinemaRef?: string;
  eventRef?: string;
  auditoriumRef?: string;
}

export interface IProjection extends CommonEntity, IProjectionCreate {}

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate projection keys.";

// **** Functions **** //

/**
 * Create new Projection.
 */
function new_(input: IProjectionCreate): IProjection {
  return {
    id: randomUUID(),
    createdAt: new Date().toJSON(),
    lastModifiedAt: new Date().toJSON(),
    title: input.title ?? "",
    text: input.text ?? "",
    date: input.date ?? "",
    tmdb: input.tmdb ?? "",
    black: input.black ?? false,
    agent: input.agent ?? "",
    images: input.images ?? [],
    reportRefs: input.reportRefs ?? [],
    cinemaRef: input.cinemaRef ?? "",
    eventRef: input.eventRef ?? "",
    auditoriumRef: input.auditoriumRef ?? "",
  };
}

/**
 * Get projection instance from object.
 */
function from(param: object): IProjection {
  // Check is projection
  if (!isProjection(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get projection instance
  const p = param as IProjectionCreate;
  return new_(p);
}

/**
 * See if the param meets criteria to be a projection.
 */
function isProjection(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "title" in arg &&
    "text" in arg &&
    "date" in arg &&
    "tmdb" in arg &&
    "black" in arg &&
    "agent" in arg &&
    "images" in arg &&
    "reportRefs" in arg &&
    "cinemaRef" in arg &&
    "eventRef" in arg &&
    "auditoriumRef" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isProjection,
} as const;

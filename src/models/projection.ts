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
    typeof arg["title"] === "string" &&
    "text" in arg &&
    typeof arg["text"] === "string" &&
    "date" in arg &&
    typeof arg["date"] === "string" &&
    "tmdb" in arg &&
    typeof arg["tmdb"] === "string" &&
    "black" in arg &&
    typeof arg["black"] === "string" &&
    "agent" in arg &&
    typeof arg["agent"] === "string" &&
    "images" in arg &&
    typeof arg["images"] === "string" &&
    "reportRefs" in arg &&
    Array.isArray(arg["reportRefs"]) &&
    "cinemaRef" in arg &&
    typeof arg["cinemaRef"] === "string" &&
    "eventRef" in arg &&
    typeof arg["eventRef"] === "string" &&
    "auditoriumRef" in arg &&
    typeof arg["auditoriumRef"] === "string"
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isProjection,
} as const;

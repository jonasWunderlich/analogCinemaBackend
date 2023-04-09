export interface Projection {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
  title: string;
  text: string;

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

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate projection keys.";

// **** Functions **** //

/**
 * Create new Projection.
 */
function new_(
  createdAt?: string,
  lastModifiedAt?: string,
  title?: string,
  text?: string,
  date?: string,
  tmdb?: string,
  black?: boolean,
  agent?: string,
  images?: string[],
  reportRefs?: string[],
  cinemaRef?: string,
  eventRef?: string,
  auditoriumRef?: string,
  // id?: number, // id last cause usually set by db
  id?: string // id last cause usually set by db
): Projection {
  return {
    // id: id ?? -1,
    id: id ?? "",
    title: title ?? "",
    createdAt: createdAt ?? "",
    lastModifiedAt: lastModifiedAt ?? "",
    text: text ?? "",
    date: date ?? "",
    tmdb: tmdb ?? "",
    black: black ?? false,
    agent: agent ?? "",
    images: images ?? [],
    reportRefs: reportRefs ?? [],
    cinemaRef: cinemaRef ?? "",
    eventRef: eventRef ?? "",
    auditoriumRef: auditoriumRef ?? "",
  };
}

/**
 * Get projection instance from object.
 */
function from(param: object): Projection {
  // Check is projection
  if (!isProjection(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get projection instance
  const p = param as Projection;
  return new_(
    p.createdAt,
    p.lastModifiedAt,
    p.title,
    p.text,
    p.date,
    p.tmdb,
    p.black,
    p.agent,
    p.images,
    p.reportRefs,
    p.cinemaRef,
    p.eventRef,
    p.auditoriumRef
  );
}

/**
 * See if the param meets criteria to be a projection.
 */
function isProjection(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    "createdAt" in arg &&
    "lastModifiedAt" in arg &&
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

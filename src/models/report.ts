// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate report keys.";

export interface Report {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;
  date: string;
  text: string;
  images?: string[];
  eventRef?: string;
  projectionRef?: string;
  cinemaRef?: string;
  auditoriumRef?: string;
}

// **** Functions **** //

/**
 * Create new Report.
 */
function new_(
  title?: string,
  createdAt?: string,
  lastModifiedAt?: string,
  date?: string,
  text?: string,
  images?: string[],
  auditoriumRef?: string,
  projectionRef?: string,
  eventRef?: string,
  id?: string // id last cause usually set by db
  // id?: number, // id last cause usually set by db
): Report {
  return {
    // id: id ?? -1,
    id: id ?? "",
    date: date ?? "",
    title: title ?? "",
    createdAt: createdAt ?? "",
    lastModifiedAt: lastModifiedAt ?? "",
    text: text ?? "",
    images: images ?? [],
    auditoriumRef: auditoriumRef ?? "",
    projectionRef: projectionRef ?? "",
    eventRef: eventRef ?? "",
  };
}

/**
 * Get report instance from object.
 */
function from(param: object): Report {
  // Check is report
  if (!isReport(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get report instance
  const p = param as Report;
  return new_(
    p.title,
    p.date,
    p.createdAt,
    p.lastModifiedAt,
    p.text,
    p.images,
    p.eventRef,
    p.projectionRef,
    p.eventRef
  );
}

/**
 * See if the param meets criteria to be a report.
 */
function isReport(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    "date" in arg &&
    "createdAt" in arg &&
    "lastModifiedAt" in arg &&
    "title" in arg &&
    "text" in arg &&
    "images" in arg &&
    "auditoriumRef" in arg &&
    "eventRef" in arg &&
    "projectionRef" in arg &&
    "eventRef" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isReport,
} as const;

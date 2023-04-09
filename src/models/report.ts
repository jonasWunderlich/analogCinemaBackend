// **** Variables **** //

import { randomUUID } from "crypto";
import { CommonEntity } from "./common";

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate report keys.";

export interface IReportCreate {
  title: string;
  text?: string;
  date: string;
  images?: string[];
  eventRef?: string;
  projectionRef?: string;
  cinemaRef?: string;
  auditoriumRef?: string;
}
export interface IReport extends CommonEntity, IReportCreate {}

// **** Functions **** //

/**
 * Create new Report.
 */
function new_(report: IReportCreate): IReport {
  return {
    id: randomUUID(),
    createdAt: new Date().toJSON(),
    lastModifiedAt: new Date().toJSON(),
    date: report.date ?? new Date().toJSON(),
    title: report.title ?? "",
    text: report.text ?? "",
    images: report.images ?? [],
    auditoriumRef: report.auditoriumRef ?? "",
    projectionRef: report.projectionRef ?? "",
    eventRef: report.eventRef ?? "",
    cinemaRef: report.cinemaRef ?? "",
  };
}

/**
 * Get report instance from object.
 */
function from(param: object): IReport {
  // Check is report
  if (!isReport(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get report instance
  const p = param as IReportCreate;
  return new_(p);
}

/**
 * See if the param meets criteria to be a report.
 */
function isReport(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "date" in arg &&
    "images" in arg &&
    "auditoriumRef" in arg &&
    "projectionRef" in arg &&
    "eventRef" in arg &&
    "cinemaRef" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isReport,
} as const;

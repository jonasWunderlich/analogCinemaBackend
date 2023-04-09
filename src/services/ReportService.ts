import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import Report, { IReport, IReportCreate } from "@src/models/Report";
import ReportRepo from "@src/repos/ReportRepo";
import ReportSchema from "@src/schemas/ReportSchema";

// **** Variables **** //

export const REPORT_NOT_FOUND_ERR = "Report not found";
export const REPORT_INVALID_ERR = "Report has Invalid values";

// **** Functions **** //

/**
 * Get all reports.
 */
function getAll(): Promise<IReport[]> {
  return ReportRepo.getAll();
}

/**
 * Get one reports.
 */
function getOne(id: string): Promise<IReport | null> {
  return ReportRepo.getOne(id);
}

/**
 * Add one report.
 */
async function addOne(report: IReportCreate): Promise<void> {
  const validate = (await ReportSchema.validateCreateReport(
    report
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, REPORT_INVALID_ERR);
  }
  return ReportRepo.add(Report.new(report));
}

/**
 * Update one report.
 */
async function updateOne(report: IReport): Promise<void> {
  const persists = await ReportRepo.persists(report.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, REPORT_NOT_FOUND_ERR);
  }
  const validate = (await ReportSchema.validateUpdateReport(
    report
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, REPORT_INVALID_ERR);
  }
  // Return report
  return ReportRepo.update(report);
}

/**
 * Delete a report by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await ReportRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, REPORT_NOT_FOUND_ERR);
  }
  // Delete report
  return ReportRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  addOne,
  updateOne,
  delete: _delete,
} as const;

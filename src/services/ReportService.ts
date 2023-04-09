import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Report } from "@src/models/report";
import ReportRepo from "@src/repos/ReportRepo";
import ReportSchema from "@src/schemas/ReportSchema";

// **** Variables **** //

export const REPORT_NOT_FOUND_ERR = "Report not found";
export const REPORT_INVALID_ERR = "Report not found";

// **** Functions **** //

/**
 * Get all reports.
 */
function getAll(): Promise<Report[]> {
  return ReportRepo.getAll();
}

/**
 * Add one report.
 */
function addOne(report: Report): Promise<void> {
  return ReportRepo.add(report);
}

/**
 * Update one report.
 */
async function updateOne(report: Report): Promise<void> {
  const persists = await ReportRepo.persists(report.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, REPORT_NOT_FOUND_ERR);
  }
  const validate = (await ReportSchema.validateReport(report)) as Promise<void>;
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
  addOne,
  updateOne,
  delete: _delete,
} as const;

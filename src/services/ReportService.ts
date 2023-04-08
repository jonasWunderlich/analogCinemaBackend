import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Report } from "@src/models/report";
import ReportRepo from "@src/repos/ReportRepo";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "Report not found";

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
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
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
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
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

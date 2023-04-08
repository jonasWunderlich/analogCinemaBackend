import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import ReportService from "@src/services/ReportService";
import { IReq, IRes } from "./types/express/misc";
import { Report } from "@src/models/report";

// **** Functions **** //

/**
 * Get all reports.
 */
async function getAll(_: IReq, res: IRes) {
  const reports = await ReportService.getAll();
  return res.status(HttpStatusCodes.OK).json({ reports });
}

/**
 * Add one report.
 */
async function add(req: IReq<{ report: Report }>, res: IRes) {
  const { report } = req.body;
  await ReportService.addOne(report);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one report.
 */
async function update(req: IReq<{ report: Report }>, res: IRes) {
  const { report } = req.body;
  await ReportService.updateOne(report);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one report.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await ReportService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;

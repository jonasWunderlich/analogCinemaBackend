import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import ReportService from "@src/services/ReportService";
import { IReq, IRes } from "./types/express/misc";
import { IReport, IReportCreate } from "@src/models/Report";

// **** Functions **** //

/**
 * Get all reports.
 */
async function getAll(_: IReq, res: IRes) {
  const reports = await ReportService.getAll();
  return res.status(HttpStatusCodes.OK).json({ reports });
}

/**
 * Get one report.
 */
async function getOne(req: IReq, res: IRes) {
  const id = req.params.id;
  const report = await ReportService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ report });
}

/**
 * Add one report.
 */
async function add(req: IReq<{ report: IReportCreate }>, res: IRes) {
  const { report } = req.body;
  await ReportService.addOne(report);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one report.
 */
async function update(req: IReq<{ report: IReport }>, res: IRes) {
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
  getOne,
  add,
  update,
  delete: delete_,
} as const;

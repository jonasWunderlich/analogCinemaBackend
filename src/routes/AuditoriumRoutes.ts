import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import AuditoriumService from "@src/services/AuditoriumService";
import { IReq, IRes } from "./types/express/misc";
import { IAuditorium, IAuditoriumCreate } from "@src/models/Auditorium";

// **** Functions **** //

/**
 * Get all auditoriums.
 */
async function getAll(_: IReq, res: IRes) {
  const auditoriums = await AuditoriumService.getAll();
  return res.status(HttpStatusCodes.OK).json({ auditoriums });
}

/**
 * Get one auditorium.
 */
async function getOne(req: IReq, res: IRes) {
  const id = req.params.id;
  const auditorium = await AuditoriumService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ auditorium });
}

/**
 * Add one auditorium.
 */
async function add(req: IReq<{ auditorium: IAuditoriumCreate }>, res: IRes) {
  const { auditorium } = req.body;
  await AuditoriumService.addOne(auditorium);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one auditorium.
 */
async function update(req: IReq<{ auditorium: IAuditorium }>, res: IRes) {
  const { auditorium } = req.body;
  await AuditoriumService.updateOne(auditorium);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one auditorium.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await AuditoriumService.delete(id);
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

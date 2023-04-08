import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import CinemaService from "@src/services/CinemaService";
import { IReq, IRes } from "./types/express/misc";
import { Cinema } from "@src/models/cinema";

// **** Functions **** //

/**
 * Get all cinemas.
 */
async function getAll(_: IReq, res: IRes) {
  const cinemas = await CinemaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ cinemas });
}

/**
 * Add one cinema.
 */
async function add(req: IReq<{ cinema: Cinema }>, res: IRes) {
  const { cinema } = req.body;
  await CinemaService.addOne(cinema);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one cinema.
 */
async function update(req: IReq<{ cinema: Cinema }>, res: IRes) {
  const { cinema } = req.body;
  await CinemaService.updateOne(cinema);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one cinema.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await CinemaService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;

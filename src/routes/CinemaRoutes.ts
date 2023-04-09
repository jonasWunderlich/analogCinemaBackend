import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import CinemaService from "@src/services/CinemaService";
import { IReq, IRes } from "./types/express/misc";
import { ICinema, ICinemaCreate } from "@src/models/Cinema";

// **** Functions **** //

/**
 * Get all cinemas.
 */
async function getAll(_: IReq, res: IRes) {
  const cinemas = await CinemaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ cinemas });
}

/**
 * Get one cinema.
 */
async function getOne(req: IReq, res: IRes) {
  const id = req.params.id;
  const cinema = await CinemaService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ cinema });
}

/**
 * Add one cinema.
 */
async function add(req: IReq<{ cinema: ICinemaCreate }>, res: IRes) {
  const { cinema } = req.body;
  await CinemaService.addOne(cinema);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one cinema.
 */
async function update(req: IReq<{ cinema: ICinema }>, res: IRes) {
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
  getOne,
  add,
  update,
  delete: delete_,
} as const;

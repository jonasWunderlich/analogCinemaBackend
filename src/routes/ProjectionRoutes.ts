import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import ProjectionService from "@src/services/ProjectionService";
import { IReq, IRes } from "./types/express/misc";
import { Projection } from "@src/models/projection";

// **** Functions **** //

/**
 * Get all projections.
 */
async function getAll(_: IReq, res: IRes) {
  const projections = await ProjectionService.getAll();
  return res.status(HttpStatusCodes.OK).json({ projections });
}

/**
 * Add one projection.
 */
async function add(req: IReq<{ projection: Projection }>, res: IRes) {
  const { projection } = req.body;
  await ProjectionService.addOne(projection);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one projection.
 */
async function update(req: IReq<{ projection: Projection }>, res: IRes) {
  const { projection } = req.body;
  await ProjectionService.updateOne(projection);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one projection.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await ProjectionService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
